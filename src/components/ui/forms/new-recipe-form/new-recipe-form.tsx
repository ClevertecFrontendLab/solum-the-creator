import { Button, HStack, Icon, useDisclosure, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { useCallback, useMemo } from 'react';
import { FormProvider, Path, useForm } from 'react-hook-form';
import { BlockerFunction, useBlocker, useNavigate } from 'react-router';

import EditIcon from '~/assets/icons/edit-icon.svg?react';
import { LeavePageModal } from '~/components/modals/leave-page-modal';
import { HttpStatusCodes } from '~/constants/data/http-status';
import { pathes } from '~/constants/navigation/pathes';
import {
    notifcationRecipeConflictError,
    notificationServerErrorDraft,
    notificationServerErrorNewRecipe,
} from '~/constants/texts/notifications';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useRedirectToRecipe } from '~/hooks/use-redirect-to-recipe';
import {
    Recipe,
    useCreateRecipeDraftMutation,
    useCreateRecipeMutation,
    useUpdateRecipeMutation,
} from '~/query/services/recipe';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';
import { mapRecipeToFormData, normalizeDraft } from '~/utils/recipe-transform';

import { NewRecipeHeader } from './new-recipe-header';
import { NewRecipeIngridients } from './new-recipe-ingridients/new-recipe-ingridients';
import { NewRecipeSteps } from './new-recipe-steps/new-recipe-steps';
import {
    RecipeDraftFormData,
    recipeDraftSchema,
    RecipeFormData,
    recipeSchema,
    Step,
} from './recipe-schema';

type NewRecipeFormProps = {
    mode?: 'create' | 'edit';
    recipe?: Recipe;
};

export const NewRecipeForm: React.FC<NewRecipeFormProps> = ({ mode = 'create', recipe }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [createRecipe, { isLoading }] = useCreateRecipeMutation();
    const [updateRecipe, { isLoading: isUpdating }] = useUpdateRecipeMutation();
    const [saveDraft, { isLoading: isSavingDraft }] = useCreateRecipeDraftMutation();
    const redirectToRecipe = useRedirectToRecipe({ showSuccessNotification: true });

    const initialValues = useMemo(
        () =>
            mode === 'edit' && recipe
                ? mapRecipeToFormData(recipe)
                : {
                      categoriesIds: [],
                      ingredients: [{ title: '', count: 0, measureUnit: '' }],
                      steps: [{ description: '', image: undefined }],
                  },
        [mode, recipe],
    );

    const methods = useForm<RecipeFormData>({
        resolver: zodResolver(recipeSchema),
        reValidateMode: 'onChange',
        mode: 'onChange',
        defaultValues: initialValues,
    });

    const { dirtyFields, isSubmitSuccessful } = methods.formState;
    const formIsDirty = Object.keys(dirtyFields).length > 0 && !isSubmitSuccessful;

    useGlobalLoading(isLoading || isUpdating || isSavingDraft);

    const shouldBlock = useCallback<BlockerFunction>(() => {
        if (formIsDirty) {
            onOpen();
        }
        return formIsDirty;
    }, [formIsDirty, onOpen]);

    const blocker = useBlocker(shouldBlock);

    const handleConfirmLeavePage = () => {
        onClose();
        if (blocker.state === 'blocked') {
            blocker.proceed();
        }
    };

    const onSubmit = async (data: RecipeFormData) => {
        const stepsWithNumbers: Step[] = data.steps.map((s, i) => ({ ...s, stepNumber: i + 1 }));
        const body = { ...data, steps: stepsWithNumbers };

        try {
            if (mode === 'edit' && recipe) {
                await updateRecipe({ id: recipe._id, body }).unwrap();
                redirectToRecipe(recipe._id, recipe.categoriesIds[0]);
            } else {
                const { _id, categoriesIds } = await createRecipe(body).unwrap();
                redirectToRecipe(_id, categoriesIds[0]);
            }
        } catch (err) {
            const error = err as FetchBaseQueryError;

            if (error.status === HttpStatusCodes.CONFLICT) {
                dispatch(
                    addNotification({
                        type: 'error',
                        title: notifcationRecipeConflictError.title,
                        description: notifcationRecipeConflictError.description,
                    }),
                );
                return;
            }

            dispatch(
                addNotification({
                    type: 'error',
                    title: notificationServerErrorNewRecipe.title,
                    description: notificationServerErrorNewRecipe.description,
                }),
            );
        }
    };

    const validateDraft = () => {
        const raw = methods.getValues();
        const draft = normalizeDraft(raw);
        const check = recipeDraftSchema.safeParse(draft);

        methods.clearErrors();

        if (!check.success) {
            check.error.issues.forEach((iss) =>
                methods.setError(iss.path.join('.') as Path<RecipeDraftFormData>, {
                    message: iss.message,
                    type: 'manual',
                }),
            );
            return null;
        }
        return draft;
    };

    const onSaveDraft = async () => {
        const draftBody = validateDraft();
        if (!draftBody) return;

        try {
            await saveDraft(draftBody).unwrap();
            navigate(pathes.home, { state: { showSuccessDraftNotification: true } });
        } catch (err) {
            const error = err as FetchBaseQueryError;

            if (error.status === HttpStatusCodes.CONFLICT) {
                dispatch(
                    addNotification({
                        type: 'error',
                        title: notifcationRecipeConflictError.title,
                        description: notifcationRecipeConflictError.description,
                    }),
                );
                return;
            }

            dispatch(
                addNotification({
                    type: 'error',
                    title: notificationServerErrorDraft.title,
                    description: notificationServerErrorDraft.description,
                }),
            );
        }
    };

    const handleOnSaveDraft = () => {
        onSaveDraft();
        onClose();
    };

    return (
        <>
            <FormProvider {...methods}>
                <VStack
                    as='form'
                    onSubmit={methods.handleSubmit(onSubmit)}
                    w='100%'
                    spacing={{ base: 8, md: 10 }}
                    align='center'
                >
                    <NewRecipeHeader />
                    <NewRecipeIngridients />
                    <NewRecipeSteps />

                    <HStack>
                        <Button
                            leftIcon={<Icon as={EditIcon} />}
                            variant='outline'
                            colorScheme='black'
                            px={4}
                            size='lg'
                            onClick={onSaveDraft}
                            data-test-id='recipe-save-draft-button'
                        >
                            Сохранить черновик
                        </Button>
                        <Button
                            variant='black'
                            size='lg'
                            type='submit'
                            data-test-id='recipe-publish-recipe-button'
                        >
                            Опубликовать рецепт
                        </Button>
                    </HStack>
                </VStack>
            </FormProvider>

            <LeavePageModal
                isOpen={isOpen}
                onClose={onClose}
                onSaveDraft={handleOnSaveDraft}
                onExitWithoutSaving={handleConfirmLeavePage}
            />
        </>
    );
};
