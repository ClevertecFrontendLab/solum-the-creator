import { Box, HStack } from '@chakra-ui/react';
import { useCallback } from 'react';

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

    const handleExcludeSwitch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { checked } = e.target;
            dispatch(setExcludeMode(checked));

            if (!checked) dispatch(resetFilters());
        },
        [dispatch],
    );

    const handleAllergenSelectionChange = useCallback(
        (allergens: Option[]) => {
            const addingFirstAllergen = selectedAllergens.length === 0 && allergens.length > 0;

            if (isDrawerFilterActive && addingFirstAllergen) {
                dispatch(clearFilters());
            }

            dispatch(setSelectedAllergens(allergens));
        },
        [dispatch, isDrawerFilterActive, selectedAllergens.length],
    );

    return (
        <HStack spacing={4} w='100%' justify='center'>
            <SwitchWithLabel
                id='exclude-allergens'
                label='Исключить мои аллергены'
                isChecked={excludeAllergens}
                onChange={handleExcludeSwitch}
                dataTestId='allergens-switcher'
            />

            <Box w='100%' maxW='14.5rem'>
                <AllergenSelect
                    selectedAllergens={selectedAllergens}
                    onChange={handleAllergenSelectionChange}
                    isDisabled={!excludeAllergens}
                    dataTestId='allergens-menu-button'
                />
            </Box>
        </HStack>
    );
};
