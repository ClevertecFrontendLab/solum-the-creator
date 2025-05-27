import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Grid, GridItem, IconButton } from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { FormSelect } from '~/components/shared/selects/form-select/form-select';

type IngredientRowProps = {
    index: number;
    isLast: boolean;
    onRemove: () => void;
    onAdd: () => void;
    register: UseFormRegister<FieldValues>;
};

export const IngredientRow: React.FC<IngredientRowProps> = ({
    index,
    isLast,
    onRemove,
    onAdd,
    register,
}) => (
    <Grid
        templateColumns={{ base: '5rem 1fr 2rem', sm: '1fr 5rem 13.5rem 2rem' }}
        templateRows={{ base: 'auto auto', sm: 'auto' }}
        columnGap={2}
        rowGap={2}
        alignItems='center'
        w='100%'
    >
        <GridItem colSpan={{ base: 4, sm: 1 }} rowSpan={1}>
            <FormInput
                size='md'
                type='text'
                borderColor='blackAlpha.200'
                placeholder='Ингредиент'
                register={register?.(`ingredients.${index}.title`)}
            />
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}>
            <FormInput
                min={0}
                type='number'
                placeholder='100'
                size='md'
                borderColor='blackAlpha.200'
                w='100%'
                register={register?.(`ingredients.${index}.amount`, {
                    valueAsNumber: true,
                })}
            />
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}>
            <FormSelect
                placeholder='Единица измерения'
                size='md'
                options={[
                    { label: 'г', value: 'g' },
                    { label: 'мл', value: 'ml' },
                    { label: 'шт', value: 'pcs' },
                ]}
                register={register('ingredients.0.unit')}
            />
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}>
            {isLast ? (
                <IconButton
                    aria-label='Добавить'
                    icon={<AddIcon boxSize={3} />}
                    borderRadius='full'
                    onClick={onAdd}
                    size='xs'
                    w='2rem'
                    h='2rem'
                    variant='black'
                />
            ) : (
                <IconButton
                    aria-label='Удалить'
                    icon={<DeleteIcon boxSize={4} />}
                    onClick={onRemove}
                    size='xs'
                    w='2rem'
                    h='2rem'
                    variant='clear'
                    color='lime.600'
                />
            )}
        </GridItem>
    </Grid>
);
