import { Flex } from '@chakra-ui/react';

import { meatTypes, sideTypes } from '~/constants/data/recipes';
import { selectParentCategoriesBySubIds } from '~/store/category/selectors';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { selectRecipesFilters } from '~/store/recipes-filters/selectors';
import {
    setAllergensFilter,
    setGarnishFilter,
    setMeatFilter,
    setSubcategoriesIdsFilter,
} from '~/store/recipes-filters/slice';
import { mergeOptionsWithValues } from '~/utils/allergens';

import { FilterTag } from './filter-tag';

export const ActiveFilters: React.FC = () => {
    const dispatch = useAppDispatch();

    const { allergens, excludeAllergens, garnish, meat, subcategoriesIds } =
        useAppSelector(selectRecipesFilters);

    const selectedMeatTypes = meatTypes.filter((opt) => meat.includes(opt.value));
    const selectedSideTypes = sideTypes.filter((opt) => garnish.includes(opt.value));
    const selectedAllergens = mergeOptionsWithValues(allergens, []);
    const parentCategories = useAppSelector(selectParentCategoriesBySubIds(subcategoriesIds));
    const selectedCategories = parentCategories.map((cat) => ({
        label: cat.title,
        value: cat._id,
    }));

    const handleRemove = {
        category: (id: string) => {
            const category = parentCategories.find((cat) => cat._id === id);
            if (!category) return;
            const idsToRemove = category.subCategories.map((s) => s._id);
            const next = subcategoriesIds.filter((id) => !idsToRemove.includes(id));
            dispatch(setSubcategoriesIdsFilter(next));
        },

        meat: (val: string) => {
            dispatch(setMeatFilter(meat.filter((m) => m !== val)));
        },
        side: (val: string) => {
            dispatch(setGarnishFilter(garnish.filter((g) => g !== val)));
        },
        allergen: (val: string) => {
            dispatch(setAllergensFilter(allergens.filter((a) => a !== val)));
        },
    };

    const hasFilters =
        selectedCategories.length > 0 ||
        selectedMeatTypes.length > 0 ||
        selectedSideTypes.length > 0 ||
        (excludeAllergens && selectedAllergens.length > 0);

    if (!hasFilters) {
        return null;
    }

    return (
        <Flex wrap='wrap' mb={{ base: 4, md: 6 }} w='100%' rowGap={2} columnGap={4}>
            {selectedCategories.map((item) => (
                <FilterTag
                    key={`cat-${item.value}`}
                    label={item.label}
                    value={item.value}
                    onRemove={handleRemove.category}
                />
            ))}
            {/* {selectedAuthors.map((item) => (
                <FilterTag
                    key={`auth-${item.value}`}
                    label={item.label}
                    value={item.value}
                    onRemove={onRemoveAuthor}
                />
            ))} */}
            {selectedMeatTypes.map((item) => (
                <FilterTag
                    key={`meat-${item.value}`}
                    label={item.label}
                    value={item.value}
                    onRemove={handleRemove.meat}
                />
            ))}
            {selectedSideTypes.map((item) => (
                <FilterTag
                    key={`side-${item.value}`}
                    label={item.label}
                    value={item.value}
                    onRemove={handleRemove.side}
                />
            ))}
            {excludeAllergens &&
                selectedAllergens.map((item) => (
                    <FilterTag
                        key={`allergen-${item.value}`}
                        label={item.label}
                        value={item.value}
                        onRemove={handleRemove.allergen}
                    />
                ))}
        </Flex>
    );
};
