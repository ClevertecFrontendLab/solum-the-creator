import { useMemo } from 'react';
import { useParams } from 'react-router';

import { Recipe } from '~/constants/data/recipes';
import { CategoryKey } from '~/constants/ui/category-icons';

export const useCategoryFilteredRecipes = (recipes: Recipe[]) => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();

    return useMemo(() => {
        if (!category || !subcategory) return [];

        return recipes.filter(
            (recipe) =>
                recipe.category.includes(category as CategoryKey) &&
                (recipe.subcategory as string[]).includes(subcategory),
        );
    }, [recipes, category, subcategory]);
};
