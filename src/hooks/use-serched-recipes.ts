import { useMemo } from 'react';

import { Recipe } from '~/constants/data/recipes';
import { useAppSelector } from '~/store/hooks';
import { selectSearchQuery } from '~/store/search/selectors';

export const useSearchedRecipes = (recipes: Recipe[]) => {
    const searchQuery = useAppSelector(selectSearchQuery);

    const trimmedQuery = searchQuery.trim();

    const searchedRecipes = useMemo(() => {
        if (!trimmedQuery) return recipes;

        const lowerQuery = trimmedQuery.toLowerCase();
        return recipes.filter((recipe) => recipe.title.toLowerCase().includes(lowerQuery));
    }, [recipes, trimmedQuery]);

    return {
        recipes: searchedRecipes,
        isSearchActive: !!trimmedQuery,
    };
};
