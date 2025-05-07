import { useEffect, useState } from 'react';

import { Recipe, useGetFilteredRecipesInfiniteQuery } from '~/query/services/recipe';
import { useAppSelector } from '~/store/hooks';
import {
    selectAppliedFilters,
    selectAppliedFilterVersion,
    selectIsFilterActive,
} from '~/store/recipes-filters/selectors';

export const useFilteredRecipes = () => {
    const isFilterApplied = useAppSelector(selectIsFilterActive);
    const filters = useAppSelector(selectAppliedFilters);
    const version = useAppSelector(selectAppliedFilterVersion);

    const [cachedRecipes, setCachedRecipes] = useState<Recipe[] | null>(null);

    const { excludeAllergens, ...clearFilters } = filters;

    const {
        data: filteredRecipesPages,
        isFetching,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useGetFilteredRecipesInfiniteQuery(
        {
            filters: clearFilters,
            perPage: 8,
            version,
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
