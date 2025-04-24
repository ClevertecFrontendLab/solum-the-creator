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
import { CategorySelect } from '~/components/ui/selects/category-select/category-select';
import { meatTypes, sideTypes } from '~/constants/data/recipes';

import { AllergenSelect } from '../selects/allergen-select/allergen-select';
import { AuthorSelect } from '../selects/author-select/author-select';
import { Option } from '../selects/multi-select-menu/multi-select-menu';
import { SwitchWithLabel } from '../swith-with-label/swith-with-label';
import { IngridientsCheckboxList } from './ingridients-checkbox-list';
type FilterDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose }) => {
    const [selectedCategories, setSelectedCategories] = useState<Option[]>([]);
    const [selectedAuthors, setSelectedAuthors] = useState<Option[]>([]);

    const [selectedMeatTypes, setSelectedMeatTypes] = useState<Option[]>([]);
    const [selectedSideTypes, setSelectedSideTypes] = useState<Option[]>([]);

    const [excludeAllergens, setExcludeAllergens] = useState(false);
    const [selectedAllergens, setSelectedAllergens] = useState<Option[]>([]);

    const handleOnChangeMeatType = (ingridient: Option) => {
        setSelectedMeatTypes((prev) => {
            const exists = prev.some((item) => item.value === ingridient.value);
            return exists
                ? prev.filter((item) => item.value !== ingridient.value)
                : [...prev, ingridient];
        });
    };

    const handleOnChangeSideType = (ingridient: Option) => {
        setSelectedSideTypes((prev) => {
            const exists = prev.some((item) => item.value === ingridient.value);
            return exists
                ? prev.filter((item) => item.value !== ingridient.value)
                : [...prev, ingridient];
        });
    };

    const handleExcludeAllergensChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setExcludeAllergens(checked);
    };

    return (
        <Drawer placement='right' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay backdropFilter='blur(2px)' bgColor='blackAlpha.300' />
            <DrawerContent
                maxW={{ base: '21.5rem', md: '29rem' }}
                px={{ base: 4, md: 8 }}
                py={{ base: 4, md: 8 }}
                pr={{ base: 5, md: 8 }}
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
                        onChange={handleOnChangeMeatType}
                    />

                    <IngridientsCheckboxList
                        title='Тип гарнира:'
                        ingridients={sideTypes}
                        checkedIngridients={selectedSideTypes}
                        onChange={handleOnChangeSideType}
                    />

                    <VStack w='100%' align='start'>
                        <SwitchWithLabel
                            id='exclude-allergens'
                            label='Исключить аллергены'
                            isChecked={excludeAllergens}
                            onChange={handleExcludeAllergensChange}
                        />

                        <AllergenSelect
                            selectedAllergens={selectedAllergens}
                            onChange={setSelectedAllergens}
                            isDisabled={!excludeAllergens}
                        />
                    </VStack>
                </DrawerBody>
                <DrawerFooter p={0} mt={{ base: 4, md: 6 }}>
                    <HStack>
                        <Button
                            variant='outline'
                            colorScheme='black'
                            size={{ base: 'sm', md: 'lg' }}
                        >
                            Очистить фильтр
                        </Button>
                        <Button variant='black' size={{ base: 'sm', md: 'lg' }}>
                            Найти рецепт
                        </Button>
                    </HStack>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
