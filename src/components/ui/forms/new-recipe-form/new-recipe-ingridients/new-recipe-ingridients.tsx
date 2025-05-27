import { Box, Grid, GridItem, Hide, Icon, Text, VStack } from '@chakra-ui/react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import PlusIcon from '~/assets/icons/plus-icon-flat.svg?react';

import { IngredientRow } from './ingridient-row';

export const NewRecipeIngridients = () => {
    const { control, register } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients',
    });

    return (
        <VStack
            as='section'
            spacing={{ base: 3, sm: 4 }}
            w='100%'
            align='stretch'
            maxW={{ base: '100%', sm: '37.75rem', md: '41.125rem', '2xl': '41.75rem' }}
        >
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='600'>
                Добавьте ингредиенты рецепта, нажав на{' '}
                <Box as='span' display='inline-flex'>
                    <Icon as={PlusIcon} boxSize={4} />
                </Box>
            </Text>

            <Hide below='sm'>
                <Grid templateColumns='1fr auto auto 4rem'>
                    <GridItem px={6} py={1}>
                        <Text fontSize='xs' fontWeight='700' color='lime.600'>
                            Ингредиент
                        </Text>
                    </GridItem>
                    <GridItem px={6} py={1}>
                        <Text fontSize='xs' fontWeight='700' color='lime.600'>
                            Количество
                        </Text>
                    </GridItem>
                    <GridItem px={6} py={1}>
                        <Text fontSize='xs' fontWeight='700' color='lime.600'>
                            Единица измерения
                        </Text>
                    </GridItem>
                </Grid>
            </Hide>

            {fields.map((field, idx) => (
                <IngredientRow
                    key={field.id}
                    index={idx}
                    isLast={idx === fields.length - 1}
                    onRemove={() => remove(idx)}
                    onAdd={() => append({ title: '', amount: 0, unit: '' })}
                    register={register}
                />
            ))}
        </VStack>
    );
};
