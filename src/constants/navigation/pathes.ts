export const pathes = {
    home: '/',
    juiciest: '/the-juiciest',
    categories: '/:category',
    subcategories: '/:category/:subcategory',
    recipes: '/:category/:subcategory/:recipeId',
    newRecipe: '/new-recipe',
    editRecipe: '/edit-recipe/:category/:subcategory/:recipeId',
    notFound: '/not-found',
    login: '/login',
    signUp: '/sign-up',
    verification: '/verification',
    subcategory: (category: string, subcategory: string) => `/${category}/${subcategory}`,
    getEditRecipe: (category: string, subcategory: string, recipeId: string) =>
        `/edit-recipe/${category}/${subcategory}/${recipeId}`,
};

export const staticPaths: Array<{ path: string; label: string }> = [
    { path: pathes.home, label: 'Главная' },
    { path: pathes.juiciest, label: 'Самое сочное' },
    { path: pathes.newRecipe, label: 'Новый рецепт' },
    { path: '/edit-recipe', label: 'Редактировать рецепт' },
    { path: pathes.notFound, label: 'Страница не найдена' },
];
