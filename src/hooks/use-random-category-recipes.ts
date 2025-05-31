import { useMemo } from 'react';

import { useGetRelevantRecipesQuery } from '~/query/services/recipe/recipe';
import { selectAllCategories } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

export const useRandomCategoryRecipes = (excludeCategoryId?: string) => {
    const categories = useAppSelector(selectAllCategories);

    const filteredCategories = useMemo(
        () =>
            excludeCategoryId ? categories.filter((c) => c._id !== excludeCategoryId) : categories,
        [categories, excludeCategoryId],
    );

    const randomCategory = useMemo(() => {
        if (!filteredCategories.length) return undefined;
        const idx = Math.floor(Math.random() * filteredCategories.length);
        return filteredCategories[idx];
    }, [filteredCategories]);

    const randomSubcategoryId = useMemo(() => {
        if (!randomCategory?.subCategories.length) return undefined;
        const idx = Math.floor(Math.random() * randomCategory.subCategories.length);
        return randomCategory.subCategories[idx]._id;
    }, [randomCategory]);

    const {
        data: recipes,
        isLoading,
        isError,
    } = useGetRelevantRecipesQuery(
        { subcategoryId: randomSubcategoryId as string },
        { skip: !randomSubcategoryId },
    );

    return {
        category: randomCategory,
        recipes: recipes ?? [],
        isLoading,
        isError,
    };
};
