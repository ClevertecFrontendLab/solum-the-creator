import { VStack } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import { NewRecipeHeader } from './new-recipe-header';
import { NewRecipeIngridients } from './new-recipe-ingridients/new-recipe-ingridients';
import { NewRecipeSteps } from './new-recipe-steps/new-recipe-steps';

export const NewRecipeForm = () => {
    const methods = useForm({
        defaultValues: {
            categories: [],
            ingredients: [{ title: '', amount: 0, unit: '' }],
            steps: [{ image: undefined, description: '' }],
        },
    });

    const onSubmit = () => {
        console.log('Submit');
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
            </VStack>
        </FormProvider>
    );
};
