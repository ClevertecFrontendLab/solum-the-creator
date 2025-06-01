export type Recipe = {
    _id: string;
    createdAt: string;
    title: string;
    description: string;
    time: number;
    image: string;
    likes: number;
    bookmarks: number;
    views: number;
    portions: number;
    authorId: string;
    categoriesIds: string[];
    steps: RecipeStep[];
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
    garnish?: string;
    meat?: string;
};

export type RecipeStep = {
    stepNumber: number;
    description: string;
    image?: string;
};

export type Ingredient = {
    title: string;
    count: number;
    measureUnit: string;
};

export type NutritionValue = {
    calories: number;
    protein: number;
    fats: number;
    carbohydrates: number;
};
