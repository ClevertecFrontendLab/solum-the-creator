import { SearchIcon } from '@chakra-ui/icons';
import {
    HStack,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
} from '@chakra-ui/react';

import FilterIcon from '~/assets/icons/filter-icon.svg?react';
import { FilterDrawer } from '~/components/ui/filter-drawer/filter-drawer';

export const HeroSearch: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <HStack spacing={3} width='100%' maxW={{ base: '28rem', md: '32.375rem' }}>
            <IconButton
                aria-label='Filter'
                variant='outline'
                colorScheme='blackAlpha'
                boxSize={{ base: 8, md: 12 }}
                p={0}
                minW={0}
                icon={<Icon boxSize={{ base: 3.5, md: 6 }} as={FilterIcon} />}
                flexShrink={0}
                onClick={onOpen}
            />
            <FilterDrawer isOpen={isOpen} onClose={onClose} />

            <InputGroup size={{ base: 'sm', md: 'lg' }}>
                <Input variant='search' placeholder='Название или ингредиент...' />
                <InputRightElement>
                    <SearchIcon />
                </InputRightElement>
            </InputGroup>
        </HStack>
    );
};
