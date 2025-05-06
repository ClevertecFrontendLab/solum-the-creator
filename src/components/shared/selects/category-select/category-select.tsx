import { useMemo } from 'react';

import { selectAllCategories, selectParentCategoriesBySubIds } from '~/store/category/selectors';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { selectSubcategoriesIdsFilter } from '~/store/recipes-filters/selectors';
import { setSubcategoriesIdsFilter } from '~/store/recipes-filters/slice';

import { MultiSelectMenu, Option } from '../multi-select-menu/multi-select-menu';

type CategorySelectProps = {
    isDisabled?: boolean;
};

export const CategorySelect: React.FC<CategorySelectProps> = ({ isDisabled }) => {
    const categories = useAppSelector(selectAllCategories);
    const dispatch = useAppDispatch();

    const categoryOptions: Option[] = useMemo(
        () =>
            categories.map((cat) => ({
                label: cat.title,
                value: cat._id,
            })),
        [categories],
    );

    const selectedSubcategoriesIds = useAppSelector(selectSubcategoriesIdsFilter);

    const selectedCategories = useAppSelector(
        selectParentCategoriesBySubIds(selectedSubcategoriesIds),
    );

    const selectedCategoryOptions = useMemo(
        () =>
            selectedCategories.map((cat) => ({
                label: cat.title,
                value: cat._id,
            })),
        [selectedCategories],
    );

    const handleChangeCategories = (selected: Option[]) => {
        const selectedCategoryIds = selected.map((opt) => opt.value);

        const allSelectedSubcategoryIds = selectedCategoryIds.flatMap((categoryId) => {
            const category = categories.find((c) => c._id === categoryId);
            return category?.subCategories.map((s) => s._id) ?? [];
        });

        dispatch(setSubcategoriesIdsFilter(allSelectedSubcategoryIds));
    };

    const testIdMap: Record<string, string> = {
        vegan: 'checkbox-веганская кухня',
    };

    return (
        <MultiSelectMenu
            options={categoryOptions}
            selected={selectedCategoryOptions}
            onChange={handleChangeCategories}
            isDisabled={isDisabled}
            placeholder='Категория'
            dataTestId='filter-menu-button-категория'
            getOptionTestId={(opt) => testIdMap[opt.value]}
        />
    );
};
