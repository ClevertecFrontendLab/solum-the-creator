import { Box, HStack } from '@chakra-ui/react';
import { useState } from 'react';

import { AllergenSelect } from '~/components/ui/selects/allergen-select/allergen-select';
import { Option } from '~/components/ui/selects/multi-select-menu/multi-select-menu';
import { SwitchWithLabel } from '~/components/ui/swith-with-label/swith-with-label';

export const HeroFilters: React.FC = () => {
    const [excludeAllergens, setExcludeAllergens] = useState(false);
    const [selectedAllergens, setSelectedAllergens] = useState<Option[]>([]);

    const handleExcludeAllergensChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setExcludeAllergens(checked);
        if (!checked) setSelectedAllergens([]);
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
                    onChange={setSelectedAllergens}
                    isDisabled={!excludeAllergens}
                />
            </Box>
        </HStack>
    );
};
