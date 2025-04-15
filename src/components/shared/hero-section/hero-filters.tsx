import { HStack, Select } from '@chakra-ui/react';

import { SwitchWithLabel } from '~/components/ui/swith-with-label/swith-with-label';

export const HeroFilters: React.FC = () => (
    <HStack spacing={4} w='100%' justify='center'>
        <SwitchWithLabel id='exclude-allergens' label='Исключить мои аллергены' />

        <Select
            variant='filled-lime'
            placeholder='Выберите из списка...'
            maxW='14.5rem'
            isTruncated={true}
        >
            <option value='option1'>Ингредиент 1</option>
            <option value='option2'>Ингредиент 2</option>
            <option value='option3'>Ингредиент 3</option>
        </Select>
    </HStack>
);
