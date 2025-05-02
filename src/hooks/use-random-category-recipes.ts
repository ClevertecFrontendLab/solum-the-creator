import { useMemo } from 'react';

import { useGetRecipesBySubcategoryIdsQuery } from '~/query/services/recipe';
import { selectAllCategories } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

export const useRandomCategoryRecipes = (excludeCategoryId?: string) => {
    const categories = useAppSelector(selectAllCategories);

    const filteredCategories = useMemo(
        () =>
            excludeCategoryId ? categories.filter((c) => c._id !== excludeCategoryId) : categories,
        [categories, excludeCategoryId],
    );

    const randomCategory = useMemo(
        () => filteredCategories[Math.floor(Math.random() * filteredCategories.length)],
        [filteredCategories],
    );

    const subcategoryIds = useMemo(
        () => randomCategory.subCategories.map((s) => s._id),
        [randomCategory],
    );

    const {
        data: recipes,
        isLoading,
        isError,
    } = useGetRecipesBySubcategoryIdsQuery(
        {
            limit: 5,
            subcategoryIds,
        },
        { skip: !subcategoryIds.length },
    );

    return {
        category: randomCategory,
        recipes: recipes ?? [],
        isLoading,
        isError,
    };
};
