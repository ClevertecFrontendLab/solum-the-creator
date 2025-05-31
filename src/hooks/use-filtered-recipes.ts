import { useEffect, useState } from 'react';

import {
    Recipe,
    SortParams,
    useGetFilteredRecipesInfiniteQuery,
} from '~/query/services/recipe/recipe';
import { useAppSelector } from '~/store/hooks';
import {
    selectAppliedFilters,
    selectAppliedFilterVersion,
    selectIsFilterActive,
} from '~/store/recipes-filters/selectors';

type FilteredRecipesParams = Partial<{
    subcategoriesIds: string[];
    sort: SortParams;
}>;

export const useFilteredRecipes = ({ subcategoriesIds, sort }: FilteredRecipesParams = {}) => {
    const isFilterApplied = useAppSelector(selectIsFilterActive);
    const filters = useAppSelector(selectAppliedFilters);
    const version = useAppSelector(selectAppliedFilterVersion);

    const [cachedRecipes, setCachedRecipes] = useState<Recipe[] | null>(null);

    const { excludeAllergens, ...clearFilters } = filters;

    const effectiveFilters = {
        ...clearFilters,
        ...((subcategoriesIds && { subcategoriesIds }) || {}),
    };

    const {
        data: filteredRecipesPages,
        isFetching,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useGetFilteredRecipesInfiniteQuery(
        {
            filters: effectiveFilters,
            perPage: 8,
            sort,
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
