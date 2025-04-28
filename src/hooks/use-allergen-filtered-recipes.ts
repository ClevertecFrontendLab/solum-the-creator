import { useMemo } from 'react';

import { Recipe } from '~/constants/data/recipes';
import { selectExcludeMode, selectSelectedAllergens } from '~/store/allergen-filter/selectors';
import { useAppSelector } from '~/store/hooks';

export const useAllergenFilteredRecipes = (recipes: Recipe[]): Recipe[] => {
    const excludeMode = useAppSelector(selectExcludeMode);
    const selectedAllergens = useAppSelector(selectSelectedAllergens);

    const filteredRecipes = useMemo(() => {
        if (selectedAllergens.length === 0) {
            return recipes;
        }

        const allergenValues = selectedAllergens.map((allergen) => allergen.value.toLowerCase());

        return recipes.filter((recipe) => {
            const ingredientTitles = recipe.ingredients.map((ingredient) =>
                ingredient.title.toLowerCase(),
            );

            const hasAllergen = ingredientTitles.some((title) =>
                allergenValues.some((allergen) => title.includes(allergen)),
            );

            return excludeMode ? !hasAllergen : hasAllergen;
        });
    }, [recipes, selectedAllergens, excludeMode]);

    return filteredRecipes;
};
