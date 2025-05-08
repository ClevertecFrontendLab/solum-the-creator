import { useMemo, useState } from 'react';

import { useGetRelevantRecipesQuery } from '~/query/services/recipe';
import { selectAllCategories } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

export const useRandomCategoryRecipes = (excludeCategoryId?: string) => {
    const categories = useAppSelector(selectAllCategories);

    const filteredCategories = useMemo(
        () =>
            excludeCategoryId ? categories.filter((c) => c._id !== excludeCategoryId) : categories,
        [categories, excludeCategoryId],
    );

    const [randomCategory] = useState(() => {
        if (!filteredCategories.length) return undefined;
        const index = Math.floor(Math.random() * filteredCategories.length);
        return filteredCategories[index];
    });

    const [randomSubcategoryId] = useState(() => {
        if (!randomCategory?.subCategories.length) return undefined;
        const index = Math.floor(Math.random() * randomCategory.subCategories.length);
        return randomCategory.subCategories[index]._id;
    });

    const {
        data: recipes,
        isLoading,
        isError,
    } = useGetRelevantRecipesQuery(
        {
            subcategoryId: randomSubcategoryId as string,
        },
        {
            skip: !randomSubcategoryId,
        },
    );

    return {
        category: randomCategory,
        recipes: recipes ?? [],
        isLoading,
        isError,
    };
};
