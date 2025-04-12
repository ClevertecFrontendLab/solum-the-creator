import { SearchIcon } from '@chakra-ui/icons';
import { HStack, Icon, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import FilterIcon from '~/assets/icons/filter-icon.svg?react';

export const HeroSearch: React.FC = () => (
    <HStack spacing={3} width='100%' maxW={{ base: '28rem', md: '32.375rem' }}>
        <IconButton
            aria-label='Search'
            variant='outline'
            colorScheme='blackAlpha'
            boxSize={{ base: 8, md: 12 }}
            icon={<Icon boxSize={{ base: 3.5, md: 6 }} as={FilterIcon} />}
            flexShrink={0}
        />
        <InputGroup size={{ base: 'sm', md: 'lg' }}>
            <Input
                placeholder='Название или ингредиент...'
                rounded={{ base: 'sm', md: 'md' }}
                focusBorderColor='lime.700'
                borderColor='blackAlpha.600'
                _hover={{ borderColor: 'lime.700' }}
                _placeholder={{ color: 'lime.800' }}
            />
            <InputRightElement>
                <SearchIcon />
            </InputRightElement>
        </InputGroup>
    </HStack>
);
