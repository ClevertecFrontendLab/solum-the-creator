import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';

import { CategoryKey } from '~/constants/ui/category-icons';
import { findMatchingSubcategory } from '~/utils/categories';

type UseNavigationToRecipeArgs = {
    recipeId: string;
    category: CategoryKey;
    subcategories: string[];
    forceFromRecipe?: boolean;
};

export const useNavigationToRecipe = ({
    recipeId,
    category,
    subcategories,
    forceFromRecipe = false,
}: UseNavigationToRecipeArgs) => {
    const navigate = useNavigate();
    const params = useParams<{ category: string; subcategory: string }>();

    return useCallback(() => {
        if (forceFromRecipe || !params.category || !params.subcategory) {
            const currentSubcategory = findMatchingSubcategory(category, subcategories);

            if (!currentSubcategory) {
                console.warn(`Could not find matching subcategory`);
                return;
            }

            navigate(`/${category}/${currentSubcategory}/${recipeId}`);
            return;
        }

        if (params.category && params.subcategory) {
            navigate(`/${params.category}/${params.subcategory}/${recipeId}`);
            return;
        }
    }, [category, navigate, params, recipeId, subcategories, forceFromRecipe]);
};
