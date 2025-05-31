import { CategoryValue } from './category';

export type Subcategory =
    | 'snacks'
    | 'vegetables'
    | 'sauces'
    | 'drinks'
    | 'warm-snacks'
    | 'second-dish'
    | 'italian'
    | 'poultry-dish'
    | 'side-dishes'
    | 'warm-salads';

export type NutritionValue = {
    calories: number;
    protein: number;
    fats: number;
    carbohydrates: number;
};

export type Ingredient = {
    title: string;
    count: number;
    measureUnit: string;
};

export type RecipeStep = {
    stepNumber: number;
    description: string;
    image?: string;
};

export type Recipe = {
    id: string;
    title: string;
    description: string;
    image: string;
    category: CategoryValue[];
    subcategory: Subcategory[];
    bookmarks?: number;
    likes: number;
    date: string;
    time: string;
    portions: number;
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
    steps: RecipeStep[];
    authorId: string;
    side?: string;
    meat?: string;
};

export const meatTypes = [
    {
        value: 'курица',
        label: 'Курица',
    },
    {
        value: 'свинина',
        label: 'Свинина',
    },
    {
        value: 'говядина',
        label: 'Говядина',
    },
    {
        value: 'индейка',
        label: 'Индейка',
    },
    {
        value: 'утка',
        label: 'Утка',
    },
];

export const sideTypes = [
    {
        value: 'картошка',
        label: 'Картошка',
    },
    {
        value: 'гречка',
        label: 'Гречка',
    },
    {
        value: 'паста',
        label: 'Паста',
    },
    {
        value: 'спагетти',
        label: 'Спагетти',
    },
    {
        value: 'рис',
        label: 'Рис',
    },
    {
        value: 'капуста',
        label: 'Капуста',
    },
    {
        value: 'фасоль',
        label: 'Фасоль',
    },
    {
        value: 'другие овощи',
        label: 'Другие овощи',
    },
];
