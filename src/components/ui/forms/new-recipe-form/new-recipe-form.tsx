import { Button, HStack, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { useCreateRecipeMutation } from '~/query/services/recipe';

import { NewRecipeHeader } from './new-recipe-header';
import { NewRecipeIngridients } from './new-recipe-ingridients/new-recipe-ingridients';
import { NewRecipeSteps } from './new-recipe-steps/new-recipe-steps';
import { RecipeFormData, recipeSchema, Step } from './recipe-schema';

export const NewRecipeForm = () => {
    const methods = useForm<RecipeFormData>({
        resolver: zodResolver(recipeSchema),
        defaultValues: {
            title: '',
            description: '',
            time: 0,
            portions: 1,
            image: '',
            categoriesIds: [],
            steps: [{ description: '', image: undefined }],
            ingredients: [{ title: '', count: 0, measureUnit: '' }],
        },
    });

    const [createRecipe] = useCreateRecipeMutation();

    const onSubmit = async (data: RecipeFormData) => {
        console.log('submit');

        const stepsWithNumbers: Step[] = data.steps.map((s, i) => ({
            ...s,
            stepNumber: i + 1,
        }));

        const body = { ...data, steps: stepsWithNumbers };

        try {
            await createRecipe(body).unwrap();
            console.log('Recipe created successfully');
        } catch (error) {
            console.log('Error creating recipe:', error);
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
