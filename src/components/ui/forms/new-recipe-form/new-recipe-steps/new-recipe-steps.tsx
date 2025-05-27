import { Button, Icon, Text, VStack } from '@chakra-ui/react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import PlusIcon from '~/assets/icons/plus-icon-filled.svg?react';

import { StepRow } from './step-row';

export const NewRecipeSteps = () => {
    const { control, register } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'steps',
    });

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
                    onRemove={() => remove(idx)}
                    register={register}
                />
            ))}

            <Button
                alignSelf='end'
                rightIcon={<Icon as={PlusIcon} boxSize={4} />}
                onClick={() => append({ description: '', image: undefined })}
                size='sm'
                variant='outline'
                colorScheme='black'
            >
                Новый шаг
            </Button>
        </VStack>
    );
};
