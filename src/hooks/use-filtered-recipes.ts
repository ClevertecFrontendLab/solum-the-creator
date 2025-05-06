import { useEffect, useState } from 'react';

import { Recipe, useGetFilteredRecipesInfiniteQuery } from '~/query/services/recipe';
import { useAppSelector } from '~/store/hooks';
import { selectAppliedFilters, selectIsFilterApplied } from '~/store/recipes-filters/selectors';

export const useFilteredRecipes = () => {
    const isFilterApplied = useAppSelector(selectIsFilterApplied);
    const filters = useAppSelector(selectAppliedFilters);

    const [cachedRecipes, setCachedRecipes] = useState<Recipe[] | null>(null);

    const {
        data: filteredRecipesPages,
        isFetching,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useGetFilteredRecipesInfiniteQuery(
        {
            filters,
            perPage: 8,
        },
        {
            skip: !isFilterApplied,
        },
    );

    useEffect(() => {
        if (filteredRecipesPages) {
            const flatRecipes = filteredRecipesPages.pages.flat();
            setCachedRecipes(flatRecipes);
        }
    }, [filteredRecipesPages]);

    useEffect(() => {
        if (!isFilterApplied) {
            setCachedRecipes(null);
        }
    }, [isFilterApplied]);

    return {
        cachedRecipes,
        isFetchingNextPage,
        isFilterApplied,
        isFetching,
        hasNextPage,
        fetchNextPage,
    };
};
