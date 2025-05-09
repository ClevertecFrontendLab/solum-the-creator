export const pathes = {
    home: '/',
    juiciest: '/the-juiciest',
    categories: '/:category',
    subcategories: '/:category/:subcategory',
    recipes: '/:category/:subcategory/:recipeId',
    notFound: '/not-found',
    subcategory: (category: string, subcategory: string) => `/${category}/${subcategory}`,
};

export const staticPaths: Array<{ path: string; label: string }> = [
    { path: pathes.home, label: 'Главная' },
    { path: pathes.juiciest, label: 'Самое сочное' },
    { path: pathes.notFound, label: 'Страница не найдена' },
];
