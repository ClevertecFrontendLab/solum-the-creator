export const pathes = {
    home: '/',
    juiciest: '/the-juiciest',
    categories: '/:category',
    subcategories: '/:category/:subcategory',
    recipes: '/:category/:subcategory/:recipeId',
    subcategory: (category: string, subcategory: string) => `/${category}/${subcategory}`,
};
