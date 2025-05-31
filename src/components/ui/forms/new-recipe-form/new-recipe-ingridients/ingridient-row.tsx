import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Grid, GridItem, IconButton } from '@chakra-ui/react';
import { useFormContext, UseFormRegister } from 'react-hook-form';

import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { FormSelect } from '~/components/shared/selects/form-select/form-select';
import { Option } from '~/components/shared/selects/multi-select-menu/multi-select-menu';

import { RecipeFormData } from '../recipe-schema';

type IngredientRowProps = {
    index: number;
    measureUnitOptions: Option[];
    isLast: boolean;
    onRemove: () => void;
    onAdd: () => void;
    register: UseFormRegister<RecipeFormData>;
};

export const IngredientRow: React.FC<IngredientRowProps> = ({
    index,
    isLast,
    measureUnitOptions,
    onRemove,
    onAdd,
    register,
}) => {
    const {
        formState: { errors },
    } = useFormContext<RecipeFormData>();

    return (
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
                    showErrorText={false}
                    {...register(`ingredients.${index}.title`)}
                    error={errors.ingredients?.[index]?.title}
                    data-test-id={`recipe-ingredients-title-${index}`}
                />
            </GridItem>

            <GridItem colSpan={1} rowSpan={1}>
                <FormInput
                    min={0}
                    type='number'
                    placeholder='100'
                    size='md'
                    borderColor='blackAlpha.200'
                    showErrorText={false}
                    w='100%'
                    {...register(`ingredients.${index}.count`, { valueAsNumber: true })}
                    error={errors.ingredients?.[index]?.count}
                    data-test-id={`recipe-ingredients-count-${index}`}
                />
            </GridItem>

            <GridItem colSpan={1} rowSpan={1}>
                <FormSelect
                    placeholder='Единица измерения'
                    size='md'
                    showErrorText={false}
                    options={measureUnitOptions}
                    {...register(`ingredients.${index}.measureUnit`)}
                    error={errors.ingredients?.[index]?.measureUnit}
                    data-test-id={`recipe-ingredients-measureUnit-${index}`}
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
                        data-test-id='recipe-ingredients-add-ingredients'
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
                        data-test-id={`recipe-ingredients-remove-ingredients-${index}`}
                    />
                )}
            </GridItem>
        </Grid>
    );
};
