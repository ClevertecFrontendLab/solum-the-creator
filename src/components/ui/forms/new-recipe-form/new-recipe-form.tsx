import { VStack } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import { NewRecipeHeader } from './new-recipe-header';
import { NewRecipeIngridients } from './new-recipe-ingridients';

export const NewRecipeForm = () => {
    const methods = useForm();

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
                align='stretch'
            >
                <NewRecipeHeader />
                <NewRecipeIngridients />
            </VStack>
        </FormProvider>
    );
};
