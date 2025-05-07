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
import { useCallback, useState } from 'react';

import FilterIcon from '~/assets/icons/filter-icon.svg?react';
import { FilterDrawer } from '~/components/ui/filter-drawer/filter-drawer';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { selectIsAllergensSelected } from '~/store/recipes-filters/selectors';
import { applyFilters, setSearchString } from '~/store/recipes-filters/slice';

type HeroSearchProps = {
    onFocusChange: (focused: boolean) => void;
};

export const HeroSearch: React.FC<HeroSearchProps> = ({ onFocusChange }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [inputValue, setInputValue] = useState('');

    const isAllergensSelected = useAppSelector(selectIsAllergensSelected);
    const dispatch = useAppDispatch();

    const isDisabled = inputValue.trim().length < 3 && !isAllergensSelected;

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            setInputValue(value);

            if (value.trim() === '') {
                dispatch(setSearchString(''));
                dispatch(applyFilters());
            }
        },
        [dispatch],
    );

    const handleSearch = useCallback(() => {
        if (!isDisabled) {
            dispatch(setSearchString(inputValue.trim()));
            dispatch(applyFilters());
        }
    }, [dispatch, inputValue, isDisabled]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        },
        [handleSearch],
    );

    const handleFocus = useCallback(() => onFocusChange(true), [onFocusChange]);
    const handleBlur = useCallback(() => onFocusChange(false), [onFocusChange]);

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
                data-test-id='filter-button'
            />
            <FilterDrawer isOpen={isOpen} onClose={onClose} />

            <InputGroup size={{ base: 'sm', md: 'lg' }}>
                <Input
                    variant='search'
                    placeholder='Название или ингредиент...'
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-test-id='search-input'
                />
                <InputRightElement>
                    <IconButton
                        aria-label='Search'
                        icon={<SearchIcon />}
                        variant='clear'
                        onClick={handleSearch}
                        isDisabled={isDisabled}
                        pointerEvents={isDisabled ? 'none' : 'auto'}
                        data-test-id='search-button'
                    />
                </InputRightElement>
            </InputGroup>
        </HStack>
    );
};
