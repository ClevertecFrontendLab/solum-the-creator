import { FormControl, FormLabel, HStack, Select, Switch } from '@chakra-ui/react';

export const HeroFilters: React.FC = () => (
    <HStack spacing={4} w='100%' justify='center'>
        <FormControl
            display='flex'
            alignItems='center'
            justifyContent='center'
            pl={2}
            py={1.5}
            w='auto'
        >
            <FormLabel htmlFor='exclude-allergens' mb='0'>
                Исключить мои аллергены
            </FormLabel>
            <Switch id='exclude-allergens' colorScheme='lime' />
        </FormControl>

        <Select placeholder='Выберите из списка...' maxW='14.5rem' isTruncated={true}>
            <option value='option1'>Ингредиент 1</option>
            <option value='option2'>Ингредиент 2</option>
            <option value='option3'>Ингредиент 3</option>
        </Select>
    </HStack>
);
