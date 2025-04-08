export const veganTags: CategoryTag[] = [
    { name: 'Закуски', alias: 'snacks' },
    { name: 'Первые блюда', alias: 'first-dishes' },
    { name: 'Вторые блюда', alias: 'second-dishes' },
    { name: 'Гарниры', alias: 'side-dishes' },
    { name: 'Десерты', alias: 'desserts' },
    { name: 'Выпечка', alias: 'baking' },
    { name: 'Сыроедческие блюда', alias: 'raw-food-dishes' },
    { name: 'Напитки', alias: 'drinks' },
];

export const subcategoriesMap: Record<string, CategoryTag[]> = {
    vegan: veganTags,
};

export type CategoryTag = {
    name: string;
    alias: string;
};

export type Subcategory = {
    name: string;
    alias: string;
};

export type Category = {
    name: string;
    alias: string;
    subcategories: Subcategory[];
};

export const veganCategory: Category = {
    name: 'Веганская кухня',
    alias: 'vegan',
    subcategories: veganTags,
};
