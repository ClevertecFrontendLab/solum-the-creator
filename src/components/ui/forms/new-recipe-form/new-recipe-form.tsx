import { Button, HStack, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { FormProvider, useForm } from 'react-hook-form';

import { HttpStatusCodes } from '~/constants/data/http-status';
import {
    notifcationRecipeConflictError,
    notificationServerErrorNewRecipe,
} from '~/constants/texts/notifications';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useRedirectToRecipe } from '~/hooks/use-redirect-to-recipe';
import { useCreateRecipeMutation } from '~/query/services/recipe';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

import { NewRecipeHeader } from './new-recipe-header';
import { NewRecipeIngridients } from './new-recipe-ingridients/new-recipe-ingridients';
import { NewRecipeSteps } from './new-recipe-steps/new-recipe-steps';
import { RecipeFormData, recipeSchema, Step } from './recipe-schema';

export const NewRecipeForm = () => {
    const dispatch = useAppDispatch();

    const methods = useForm<RecipeFormData>({
        resolver: zodResolver(recipeSchema),
        defaultValues: {
            categoriesIds: [],
            ingredients: [{ title: '', count: 0, measureUnit: '' }],
            steps: [{ description: '', image: undefined }],
        },
    });

    const [createRecipe, { isLoading }] = useCreateRecipeMutation();
    const redirectToRecipe = useRedirectToRecipe({ showSuccessNotification: true });

    useGlobalLoading(isLoading);

    const onSubmit = async (data: RecipeFormData) => {
        const stepsWithNumbers: Step[] = data.steps.map((s, i) => ({
            ...s,
            stepNumber: i + 1,
        }));

        const body = { ...data, steps: stepsWithNumbers };

        try {
            const { _id: recipeId, categoriesIds } = await createRecipe(body).unwrap();

            redirectToRecipe(recipeId, categoriesIds[0]);
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

    return (
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
                    <Button variant='black' size='lg' type='submit'>
                        Опубликовать рецепт
                    </Button>
                </HStack>
            </VStack>
        </FormProvider>
    );
};
