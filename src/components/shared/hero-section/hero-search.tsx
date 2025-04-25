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
import { useState } from 'react';

import FilterIcon from '~/assets/icons/filter-icon.svg?react';
import { FilterDrawer } from '~/components/ui/filter-drawer/filter-drawer';
import { useAppDispatch } from '~/store/hooks';
import { clearSearchQuery, setSearchQuery } from '~/store/search/slice';

type HeroSearchProps = {
    onFocusChange: (focused: boolean) => void;
};

export const HeroSearch: React.FC<HeroSearchProps> = ({ onFocusChange }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setInputValue(event.target.value);

        if (value.trim() === '') {
            dispatch(clearSearchQuery());
        }
    };

    const handleSearch = () => {
        dispatch(setSearchQuery(inputValue));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

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
                <Input
                    variant='search'
                    placeholder='Название или ингредиент...'
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => onFocusChange(true)}
                    onBlur={() => onFocusChange(false)}
                />
                <InputRightElement>
                    <IconButton
                        aria-label='Search'
                        icon={<SearchIcon />}
                        variant='clear'
                        onClick={handleSearch}
                    />
                </InputRightElement>
            </InputGroup>
        </HStack>
    );
};
