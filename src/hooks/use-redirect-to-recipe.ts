import { useLocation, useNavigate } from 'react-router';

import { selectCategoryBySubCategoryId, selectSubCategoryById } from '~/store/category/selectors';
import { store } from '~/store/configure-store';

type RedirectToRecipeArgs = {
    showSuccessNotification?: boolean;
};

export const useRedirectToRecipe = ({
    showSuccessNotification = false,
}: RedirectToRecipeArgs = {}) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (recipeId: string, subCategoryId: string) => {
        const state = store.getState();
        const category = selectCategoryBySubCategoryId(subCategoryId)(state);
        const subCategory = selectSubCategoryById(subCategoryId)(state);

        if (!category || !subCategory) {
            console.warn(`Category or subcategory not found: ${subCategoryId}`);
            return;
        }

        navigate(`/${category.category}/${subCategory.category}/${recipeId}`, {
            state: { from: location.pathname, showSuccessNotification },
        });
    };
};
