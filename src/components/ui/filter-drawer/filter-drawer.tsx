import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    HStack,
    Icon,
    IconButton,
    VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';

import CloseIcon from '~/assets/icons/full-close-icon.svg?react';
import { CategorySelect } from '~/components/shared/selects/category-select/category-select';
import { meatTypes, sideTypes } from '~/constants/data/recipes';
import { useFilterOption } from '~/hooks/use-filter-option';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    selectAllergensFilter,
    selectExcludeAllergensFilter,
    selectGarnishFilter,
    selectIsFilterDraftActive,
    selectMeatFilter,
} from '~/store/recipes-filters/selectors';
import {
    applyFilters,
    resetDraftFilters,
    resetFilters,
    setAllergensFilter,
    setExcludeAllergensFilter,
    setGarnishFilter,
    setMeatFilter,
} from '~/store/recipes-filters/slice';

import { AllergenSelect } from '../../shared/selects/allergen-select/allergen-select';
import { SwitchWithLabel } from '../../shared/switch-with-label/switch-with-label';
import { ActiveFilters } from './active-filters';
import { IngridientsCheckboxList } from './ingridients-checkbox-list';
type FilterDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose }) => {
    const dispatch = useAppDispatch();

    const isFiltersActive = useAppSelector(selectIsFilterDraftActive);

    const selectedMeat = useAppSelector(selectMeatFilter);
    const { selectedOptions: selectedMeatOptions, toggleOption: toggleMeatOption } =
        useFilterOption(selectedMeat, meatTypes, (values) => dispatch(setMeatFilter(values)));

    const selectedGarnish = useAppSelector(selectGarnishFilter);
    const { selectedOptions: selectedGarnishOptions, toggleOption: toggleGarnishOption } =
        useFilterOption(selectedGarnish, sideTypes, (values) => dispatch(setGarnishFilter(values)));

    const isExcludeAllergens = useAppSelector(selectExcludeAllergensFilter);

    const selectedAllergens = useAppSelector(selectAllergensFilter);
    const handleAllergensChange = (values: string[]) => {
        dispatch(setAllergensFilter(values));
    };

    useEffect(() => {
        if (isOpen) {
            dispatch(resetDraftFilters());
        }
    }, [isOpen, dispatch]);

    const handleExcludeAllergensChange = () => {
        dispatch(setExcludeAllergensFilter(!isExcludeAllergens));
    };

    const handleClearFilters = () => {
        dispatch(resetFilters());
    };

    const handleSubmitFilters = () => {
        dispatch(applyFilters());
        onClose();
    };

    return (
        <Drawer placement='right' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay backdropFilter='blur(2px)' bgColor='blackAlpha.300' />
            <DrawerContent
                maxW={{ base: '21.5rem', md: '29rem' }}
                px={{ base: 4, md: 8 }}
                py={{ base: 4, md: 8 }}
                pr={{ base: 5, md: 8 }}
                data-test-id='filter-drawer'
            >
                <DrawerHeader
                    display='flex'
                    justifyContent='space-between'
                    p={0}
                    mb={{ base: 8, md: 10 }}
                >
                    <Heading as='h3' fontSize='2xl' fontWeight='bold' lineHeight='2rem'>
                        Фильтр
                    </Heading>
                    <IconButton
                        aria-label='Close'
                        variant='clear'
                        onClick={onClose}
                        size='xs'
                        icon={<Icon as={CloseIcon} boxSize={6} />}
                        mt={1}
                        data-test-id='close-filter-drawer'
                    />
                </DrawerHeader>
                <DrawerBody p={0} display='flex' flexDirection='column' gap={{ base: 4, md: 6 }}>
                    <CategorySelect />

                    {/* <AuthorSelect selectedAuthors={selectedAuthors} onChange={setSelectedAuthors} /> */}

                    <IngridientsCheckboxList
                        title='Тип мяса:'
                        ingridients={meatTypes}
                        checkedIngridients={selectedMeatOptions}
                        onChange={toggleMeatOption}
                    />

                    <IngridientsCheckboxList
                        title='Тип гарнира:'
                        ingridients={sideTypes}
                        checkedIngridients={selectedGarnishOptions}
                        onChange={toggleGarnishOption}
                    />

                    <VStack w='100%' align='start'>
                        <SwitchWithLabel
                            id='exclude-allergens'
                            label='Исключить аллергены'
                            isChecked={isExcludeAllergens}
                            onChange={handleExcludeAllergensChange}
                            dataTestId='allergens-switcher-filter'
                        />

                        <AllergenSelect
                            selectedAllergens={selectedAllergens}
                            onChange={handleAllergensChange}
                            isDisabled={!isExcludeAllergens}
                            dataTestId='allergens-menu-button-filter'
                        />
                    </VStack>
                </DrawerBody>
                <DrawerFooter p={0} mt={{ base: 4, md: 6 }} display='flex' flexDirection='column'>
                    <ActiveFilters />

                    <HStack justify='end' w='100%'>
                        <Button
                            variant='outline'
                            colorScheme='black'
                            size={{ base: 'sm', md: 'lg' }}
                            onClick={handleClearFilters}
                            data-test-id='clear-filter-button'
                        >
                            Очистить фильтр
                        </Button>
                        <Button
                            variant='black'
                            size={{ base: 'sm', md: 'lg' }}
                            onClick={handleSubmitFilters}
                            isDisabled={!isFiltersActive}
                            pointerEvents={isFiltersActive ? 'auto' : 'none'}
                            data-test-id='find-recipe-button'
                        >
                            Найти рецепт
                        </Button>
                    </HStack>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
