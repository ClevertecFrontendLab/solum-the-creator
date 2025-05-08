import { Recipe } from '~/query/services/recipe';

export const getNewestRecipes = (recipes: Recipe[], count = 10) =>
    [...recipes]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, count);

export const getPopularRecipes = (recipes: Recipe[]) =>
    [...recipes].sort((a, b) => b.likes - a.likes);
