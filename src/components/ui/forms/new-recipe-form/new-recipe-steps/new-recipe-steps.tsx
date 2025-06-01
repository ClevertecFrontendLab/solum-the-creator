import { Button, Icon, Text, VStack } from '@chakra-ui/react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import PlusIcon from '~/assets/icons/plus-icon-filled.svg?react';
import { emptyRecipeFormStep } from '~/constants/data/recipe-form';

import { RecipeFormData } from '../recipe-schema';
import { StepRow } from './step-row';

export const NewRecipeSteps = () => {
    const { control, register } = useFormContext<RecipeFormData>();
    const { fields, append, remove, update } = useFieldArray<RecipeFormData, 'steps', 'id'>({
        control,
        name: 'steps',
    });

    const handleRemove = (index: number) => {
        if (fields.length === 1) {
            update(0, emptyRecipeFormStep);
            return;
        }

        remove(index);
    };

    return (
        <VStack
            as='section'
            spacing={4}
            w='100%'
            align='stretch'
            maxW={{ base: '100%', sm: '37.75rem', md: '41.125rem', '2xl': '41.75rem' }}
        >
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='600'>
                Добавьте шаги приготовления
            </Text>

            {fields.map((field, idx) => (
                <StepRow
                    key={field.id}
                    index={idx}
                    onRemove={() => handleRemove(idx)}
                    register={register}
                />
            ))}

            <Button
                alignSelf='end'
                rightIcon={<Icon as={PlusIcon} boxSize={4} />}
                onClick={() => append(emptyRecipeFormStep)}
                size='sm'
                variant='outline'
                colorScheme='black'
            >
                Новый шаг
            </Button>
        </VStack>
    );
};
