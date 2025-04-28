import { useMemo } from 'react';

import { CategoryValue } from '~/constants/data/category';
import { Recipe } from '~/constants/data/recipes';
import { useAppSelector } from '~/store/hooks';

export const useFilteredRecipes = (recipes: Recipe[]) => {
    const { categories, authors, allergens, excludeAllergens, meatTypes, sideTypes } =
        useAppSelector((state) => state.recipeFilter);

    const filteredRecipes = useMemo(
        () =>
            recipes.filter((recipe) => {
                const categoryMatch =
                    categories.length === 0 ||
                    categories.some((category) =>
                        recipe.category.includes(category.value as CategoryValue),
                    );

                const authorMatch =
                    authors.length === 0 ||
                    authors.some((author) => recipe.authorId === author.value);

                const meatMatch =
                    meatTypes.length === 0 ||
                    meatTypes.some((meat) => recipe.meat?.includes(meat.value));

                const sideMatch =
                    sideTypes.length === 0 ||
                    sideTypes.some((side) => recipe.side?.includes(side.value));

                const ingredientTitles = recipe.ingredients.map((ingredient) =>
                    ingredient.title.toLowerCase(),
                );

                const allergenMatch =
                    excludeAllergens &&
                    ingredientTitles.some((title) =>
                        allergens.some((allergen) => title.includes(allergen.value)),
                    );

                return categoryMatch && authorMatch && meatMatch && sideMatch && !allergenMatch;
            }),
        [allergens, authors, recipes, categories, excludeAllergens, meatTypes, sideTypes],
    );

    return filteredRecipes;
};
