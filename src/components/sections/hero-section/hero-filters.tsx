import { Box, HStack } from '@chakra-ui/react';

import { AllergenSelect } from '~/components/shared/selects/allergen-select/allergen-select';
import { Option } from '~/components/shared/selects/multi-select-menu/multi-select-menu';
import { SwitchWithLabel } from '~/components/shared/switch-with-label/switch-with-label';
import { selectExcludeMode, selectSelectedAllergens } from '~/store/allergen-filter/selectors';
import { resetFilters, setExcludeMode, setSelectedAllergens } from '~/store/allergen-filter/slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { selectIsDrawerFilterApplied } from '~/store/recipe-filter/selectors';
import { clearFilters } from '~/store/recipe-filter/slice';

export const HeroFilters: React.FC = () => {
    const dispatch = useAppDispatch();
    const excludeAllergens = useAppSelector(selectExcludeMode);
    const selectedAllergens = useAppSelector(selectSelectedAllergens);

    const isDrawerFilterActive = useAppSelector(selectIsDrawerFilterApplied);

    const handleExcludeAllergensChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        dispatch(setExcludeMode(checked));
        if (!checked) {
            dispatch(resetFilters());
        }
    };

    const handleAllergensChange = (allergens: Option[]) => {
        const isFirstAllergenAdded = selectedAllergens.length === 0 && allergens.length > 0;

        if (isDrawerFilterActive && isFirstAllergenAdded) {
            dispatch(clearFilters());
        }

        dispatch(setSelectedAllergens(allergens));
    };

    return (
        <HStack spacing={4} w='100%' justify='center'>
            <SwitchWithLabel
                id='exclude-allergens'
                label='Исключить мои аллергены'
                isChecked={excludeAllergens}
                onChange={handleExcludeAllergensChange}
                dataTestId='allergens-switcher'
            />

            <Box maxW='14.5rem' w='100%'>
                <AllergenSelect
                    selectedAllergens={selectedAllergens}
                    onChange={handleAllergensChange}
                    isDisabled={!excludeAllergens}
                    dataTestId='allergens-menu-button'
                />
            </Box>
        </HStack>
    );
};
