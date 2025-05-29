import { AddIcon } from '@chakra-ui/icons';
import { Grid, GridItem, IconButton } from '@chakra-ui/react';

import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { FormSelect } from '~/components/shared/selects/form-select/form-select';
import { Option } from '~/components/shared/selects/multi-select-menu/multi-select-menu';

type DraftIngredientRowProps = {
    value: { title: string; count: number; measureUnit: string };
    measureUnitOptions: Option[];
    onChange: (value: DraftIngredientRowProps['value']) => void;
    onAdd: () => void;
};

export const DraftIngredientRow: React.FC<DraftIngredientRowProps> = ({
    value,
    measureUnitOptions,
    onChange,
    onAdd,
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
                value={value.title}
                size='md'
                borderColor='blackAlpha.200'
                onChange={(e) => onChange({ ...value, title: e.target.value })}
                placeholder='Ингредиент'
            />
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}>
            <FormInput
                type='number'
                min={0}
                size='md'
                borderColor='blackAlpha.200'
                value={value.count}
                onChange={(e) => onChange({ ...value, count: Number(e.target.value) })}
                placeholder='100'
            />
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}>
            <FormSelect
                size='md'
                value={value.measureUnit}
                onChange={(e) => onChange({ ...value, measureUnit: e.target.value })}
                options={measureUnitOptions}
                placeholder='Единица измерения'
            />
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}>
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
        </GridItem>
    </Grid>
);
