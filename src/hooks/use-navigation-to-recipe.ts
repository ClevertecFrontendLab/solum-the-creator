import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';

export const useNavigationToRecipe = (recipeId: string) => {
    const navigate = useNavigate();
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();

    return useCallback(() => {
        navigate(`/${category}/${subcategory}/${recipeId}`);
    }, [navigate, category, subcategory, recipeId]);
};
