import { Box, HStack } from '@chakra-ui/react';

import { AllergenSelect } from '~/components/shared/selects/allergen-select/allergen-select';
import { SwitchWithLabel } from '~/components/shared/switch-with-label/switch-with-label';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    selectAppliedAllergensFilter,
    selectAppliedExcludeAllergensFilter,
} from '~/store/recipes-filters/selectors';
import {
    setAllergensFilter,
    setAppliedAllergensFilter,
    setAppliedExcludeAllergensFilter,
    setExcludeAllergensFilter,
} from '~/store/recipes-filters/slice';

export const HeroFilters: React.FC = () => {
    const dispatch = useAppDispatch();

    const selectedAllergens = useAppSelector(selectAppliedAllergensFilter);
    const excludeAllergens = useAppSelector(selectAppliedExcludeAllergensFilter);

    const handleAllergenChange = (values: string[]) => {
        dispatch(setAllergensFilter(values));
        dispatch(setAppliedAllergensFilter(values));
    };

    const handleExcludeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;

        dispatch(setExcludeAllergensFilter(checked));
        dispatch(setAppliedExcludeAllergensFilter(checked));
    };

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
                    onChange={handleAllergenChange}
                    isDisabled={!excludeAllergens}
                    dataTestId='allergens-menu-button'
                />
            </Box>
        </HStack>
    );
};
