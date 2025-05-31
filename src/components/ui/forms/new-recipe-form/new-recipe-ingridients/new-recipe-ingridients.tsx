import { Box, Grid, GridItem, Hide, Icon, Text, VStack } from '@chakra-ui/react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import PlusIcon from '~/assets/icons/plus-icon-flat.svg?react';
import { useGetMeasureUnitsQuery } from '~/query/services/measure-units';

import { RecipeFormData } from '../recipe-schema';
import { IngredientRow } from './ingridient-row';

export const NewRecipeIngridients = () => {
    const { control, register } = useFormContext<RecipeFormData>();
    const { fields, append, remove } = useFieldArray<RecipeFormData, 'ingredients', 'id'>({
        control,
        name: 'ingredients',
    });

    const { data: measureUnitOptions = [], isLoading } = useGetMeasureUnitsQuery();

    const handleAddIngridient = () => {
        append({
            title: '',
            count: 0,
            measureUnit: '',
        });
    };

    const handleRemoveIngridient = (index: number) => () => {
        remove(index);
    };

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

            {!isLoading &&
                fields.map((field, idx) => (
                    <IngredientRow
                        key={field.id}
                        index={idx}
                        measureUnitOptions={measureUnitOptions}
                        isLast={idx === fields.length - 1}
                        onRemove={handleRemoveIngridient(idx)}
                        onAdd={handleAddIngridient}
                        register={register}
                    />
                ))}
        </VStack>
    );
};
