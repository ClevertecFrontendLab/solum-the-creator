import { Recipe } from '~/constants/data/recipes';

export const getNewestRecipes = (recipes: Recipe[], count = 10) =>
    [...recipes]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count);

export const getPopularRecipes = (recipes: Recipe[]) =>
    [...recipes].sort((a, b) => b.likes - a.likes);
