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
import { useState } from 'react';

import CloseIcon from '~/assets/icons/full-close-icon.svg?react';
import { CategorySelect } from '~/components/shared/selects/category-select/category-select';
import { meatTypes, sideTypes } from '~/constants/data/recipes';
import { selectIsAllergenFilterActive } from '~/store/allergen-filter/selectors';
import { resetFilters } from '~/store/allergen-filter/slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    clearFilters,
    setAllergens,
    setAuthors,
    setCategories,
    setExcludeAllergens,
    setMeatTypes,
    setSideTypes,
} from '~/store/recipe-filter/slice';

import { AllergenSelect } from '../../shared/selects/allergen-select/allergen-select';
import { AuthorSelect } from '../../shared/selects/author-select/author-select';
import { Option } from '../../shared/selects/multi-select-menu/multi-select-menu';
import { SwitchWithLabel } from '../../shared/switch-with-label/switch-with-label';
import { ActiveFilters } from './active-filters';
import { IngridientsCheckboxList } from './ingridients-checkbox-list';
type FilterDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose }) => {
    const dispatch = useAppDispatch();
    const isAllergensFilterActive = useAppSelector(selectIsAllergenFilterActive);

    const [selectedCategories, setSelectedCategories] = useState<Option[]>([]);
    const [selectedAuthors, setSelectedAuthors] = useState<Option[]>([]);

    const [selectedMeatTypes, setSelectedMeatTypes] = useState<Option[]>([]);
    const [selectedSideTypes, setSelectedSideTypes] = useState<Option[]>([]);

    const [isExcludeAllergens, setIsExcludeAllergens] = useState(false);
    const [selectedAllergens, setSelectedAllergens] = useState<Option[]>([]);

    const isFiltersActive =
        [selectedCategories, selectedAuthors, selectedMeatTypes, selectedSideTypes].some(
            (list) => list.length > 0,
        ) ||
        (isExcludeAllergens && selectedAllergens.length > 0);

    const handleToggleOption = (
        option: Option,
        setOptions: React.Dispatch<React.SetStateAction<Option[]>>,
    ) => {
        setOptions((prev) =>
            prev.some((item) => item.value === option.value)
                ? prev.filter((item) => item.value !== option.value)
                : [...prev, option],
        );
    };

    const handleExcludeAllergensChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setIsExcludeAllergens(checked);
    };

    const clearAllFilters = () => {
        setSelectedCategories([]);
        setSelectedAuthors([]);
        setSelectedMeatTypes([]);
        setSelectedSideTypes([]);
        setIsExcludeAllergens(false);
        setSelectedAllergens([]);

        dispatch(resetFilters());
    };

    const handleSubmitFilters = () => {
        if (isAllergensFilterActive) {
            dispatch(resetFilters());
        }

        dispatch(setCategories(selectedCategories));
        dispatch(setAuthors(selectedAuthors));
        dispatch(setMeatTypes(selectedMeatTypes));
        dispatch(setSideTypes(selectedSideTypes));
        dispatch(setExcludeAllergens(isExcludeAllergens));
        dispatch(setAllergens(selectedAllergens));

        clearAllFilters();
        onClose();
    };

    const handleClearFilters = () => {
        clearAllFilters();
        dispatch(clearFilters());
    };

    const createRemover =
        (setter: React.Dispatch<React.SetStateAction<Option[]>>) => (value: string) =>
            setter((prev) => prev.filter((item) => item.value !== value));

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
                    <CategorySelect
                        selectedCategories={selectedCategories}
                        onChange={setSelectedCategories}
                    />

                    <AuthorSelect selectedAuthors={selectedAuthors} onChange={setSelectedAuthors} />

                    <IngridientsCheckboxList
                        title='Тип мяса:'
                        ingridients={meatTypes}
                        checkedIngridients={selectedMeatTypes}
                        onChange={(ingridient) =>
                            handleToggleOption(ingridient, setSelectedMeatTypes)
                        }
                    />

                    <IngridientsCheckboxList
                        title='Тип гарнира:'
                        ingridients={sideTypes}
                        checkedIngridients={selectedSideTypes}
                        onChange={(ingridient) =>
                            handleToggleOption(ingridient, setSelectedSideTypes)
                        }
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
                            onChange={setSelectedAllergens}
                            isDisabled={!isExcludeAllergens}
                            dataTestId='allergens-menu-button-filter'
                        />
                    </VStack>
                </DrawerBody>
                <DrawerFooter p={0} mt={{ base: 4, md: 6 }} display='flex' flexDirection='column'>
                    <ActiveFilters
                        selectedCategories={selectedCategories}
                        selectedAuthors={selectedAuthors}
                        selectedMeatTypes={selectedMeatTypes}
                        selectedSideTypes={selectedSideTypes}
                        selectedAllergens={selectedAllergens}
                        isExcludeAllergens={isExcludeAllergens}
                        onRemoveCategory={createRemover(setSelectedCategories)}
                        onRemoveAuthor={createRemover(setSelectedAuthors)}
                        onRemoveMeatType={createRemover(setSelectedMeatTypes)}
                        onRemoveSideType={createRemover(setSelectedSideTypes)}
                        onRemoveAllergen={createRemover(setSelectedAllergens)}
                    />

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
