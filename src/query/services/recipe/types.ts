import { Recipe } from '~/types/recipe';

export type RecipeResponse = {
    data: Recipe[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
};

export type RecipesInitialPageParam = {
    page: number;
    limit: number;
};

export type FilterParams = {
    page: number;
    limit: number;
    searchString?: string;
    subcategoriesIds?: string[];
    meat?: string[];
    garnish?: string[];
    allergens?: string[];
    excludeAllergens?: boolean;
};

export type SortParams = Partial<{
    sortBy: 'likes' | 'createdAt';
    sortOrder: 'asc' | 'desc';
}>;
