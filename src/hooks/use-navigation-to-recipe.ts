import { useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';

import { selectCategoryBySubCategoryId, selectSubCategoryById } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

type UseNavigationToRecipeArgs = {
    recipeId: string;
    subCategoryId: string;
    forceFromRecipe?: boolean;
};

export const useNavigationToRecipe = ({
    recipeId,
    subCategoryId,
    forceFromRecipe = false,
}: UseNavigationToRecipeArgs) => {
    const navigate = useNavigate();
    const params = useParams<{ category: string; subcategory: string }>();
    const location = useLocation();

    const category = useAppSelector(selectCategoryBySubCategoryId(subCategoryId));
    const subCategory = useAppSelector(selectSubCategoryById(subCategoryId));

    return useCallback(() => {
        if (forceFromRecipe || !params.category || !params.subcategory) {
            if (!category || !subCategory) {
                console.warn(`Category or subcategory not found: ${subCategoryId}`);
                return;
            }

            navigate(`/${category.category}/${subCategory.category}/${recipeId}`, {
                state: { from: location.pathname },
            });
            return;
        }

        if (params.category && params.subcategory) {
            navigate(`/${params.category}/${params.subcategory}/${recipeId}`, {
                state: { from: location.pathname },
            });
            return;
        }
    }, [
        category,
        forceFromRecipe,
        navigate,
        params.category,
        params.subcategory,
        recipeId,
        subCategory,
        subCategoryId,
        location,
    ]);
};
