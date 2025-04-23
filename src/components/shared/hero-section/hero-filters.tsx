import { Box, HStack } from '@chakra-ui/react';

import { AllergenSelect } from '~/components/ui/selects/allergen-select/allergen-select';
import { Option } from '~/components/ui/selects/multi-select-menu/multi-select-menu';
import { SwitchWithLabel } from '~/components/ui/swith-with-label/swith-with-label';
import { selectExcludeMode, selectSelectedAllergens } from '~/store/allergen-filter/selectors';
import { resetFilters, setExcludeMode, setSelectedAllergens } from '~/store/allergen-filter/slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

export const HeroFilters: React.FC = () => {
    const dispatch = useAppDispatch();
    const excludeAllergens = useAppSelector(selectExcludeMode);
    const selectedAllergens = useAppSelector(selectSelectedAllergens);

    const handleExcludeAllergensChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        dispatch(setExcludeMode(checked));
        if (!checked) {
            dispatch(resetFilters());
        }
    };

    const handleAllergensChange = (allergens: Option[]) => {
        dispatch(setSelectedAllergens(allergens));
    };

    return (
        <HStack spacing={4} w='100%' justify='center'>
            <SwitchWithLabel
                id='exclude-allergens'
                label='Исключить мои аллергены'
                isChecked={excludeAllergens}
                onChange={handleExcludeAllergensChange}
            />

            <Box maxW='14.5rem' w='100%'>
                <AllergenSelect
                    selectedAllergens={selectedAllergens}
                    onChange={handleAllergensChange}
                    isDisabled={!excludeAllergens}
                />
            </Box>
        </HStack>
    );
};
