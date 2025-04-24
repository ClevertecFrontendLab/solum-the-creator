import recipe1Img from '~/assets/recipes/recipe-1/recipe-1.jpg';
import recipe1Step1 from '~/assets/recipes/recipe-1/step-1.jpg';
import recipe1Step2 from '~/assets/recipes/recipe-1/step-2.jpg';
import recipe1Step3 from '~/assets/recipes/recipe-1/step-3.jpg';
import recipe1Step4 from '~/assets/recipes/recipe-1/step-4.jpg';
import recipe2Img from '~/assets/recipes/recipe-2/recipe-2.jpg';
import recipe2Step1 from '~/assets/recipes/recipe-2/step-1.jpg';
import recipe2Step2 from '~/assets/recipes/recipe-2/step-2.jpg';
import recipe2Step3 from '~/assets/recipes/recipe-2/step-3.jpg';
import recipe3Img from '~/assets/recipes/recipe-3/recipe-3.jpg';
import recipe3Step1 from '~/assets/recipes/recipe-3/step-1.jpg';
import recipe3Step2 from '~/assets/recipes/recipe-3/step-2.jpg';
import recipe4Img from '~/assets/recipes/recipe-4/recipe-4.jpg';
import recipe4Step1 from '~/assets/recipes/recipe-4/step-1.jpg';
import recipe4Step2 from '~/assets/recipes/recipe-4/step-2.jpg';
import recipe5Img from '~/assets/recipes/recipe-5/recipe-5.jpg';
import recipe5Step1 from '~/assets/recipes/recipe-5/step-1.jpg';
import recipe5Step3 from '~/assets/recipes/recipe-5/step-3.jpg';
import recipe6Img from '~/assets/recipes/recipe-6/recipe-6.jpg';
import recipe6Step1 from '~/assets/recipes/recipe-6/step-1.jpg';
import recipe6Step2 from '~/assets/recipes/recipe-6/step-2.jpg';
import recipe6Step3 from '~/assets/recipes/recipe-6/step-3.jpg';
import recipe7Img from '~/assets/recipes/recipe-7/recipe-7.jpg';
import recipe7Step1 from '~/assets/recipes/recipe-7/step-1.jpg';
import recipe7Step2 from '~/assets/recipes/recipe-7/step-2.jpg';
import recipe7Step3 from '~/assets/recipes/recipe-7/step-3.jpg';
import recipe8Img from '~/assets/recipes/recipe-8/recipe-8.jpg';
import recipe8Step1 from '~/assets/recipes/recipe-8/step-1.jpg';
import recipe8Step2 from '~/assets/recipes/recipe-8/step-2.jpg';
import recipe9Img from '~/assets/recipes/recipe-9/recipe-9.jpg';
import recipe9Step1 from '~/assets/recipes/recipe-9/step-1.jpg';
import recipe9Step2 from '~/assets/recipes/recipe-9/step-2.jpg';
import { CategoryKey } from '~/constants/ui/category-icons';

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
    proteins: number;
    fats: number;
    carbohydrates: number;
};

export type Ingredient = {
    title: string;
    count: string;
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
    category: CategoryKey[];
    subcategory: Subcategory[];
    bookmarks?: number;
    likes?: number;
    date: string;
    time: string;
    portions: number;
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
    steps: RecipeStep[];
    side?: string;
    meat?: string;
};

export const meatTypes = [
    {
        value: 'chicken',
        label: 'Курица',
    },
    {
        value: 'pork',
        label: 'Свинина',
    },
    {
        value: 'beef',
        label: 'Говядина',
    },
    {
        value: 'turkey',
        label: 'Индейка',
    },
    {
        value: 'duck',
        label: 'Утка',
    },
];

export const sideTypes = [
    {
        value: 'potato',
        label: 'Картошка',
    },
    {
        value: 'buckwheat',
        label: 'Гречка',
    },
    {
        value: 'pasta',
        label: 'Паста',
    },
    {
        value: 'spaghetti',
        label: 'Спагетти',
    },
    {
        value: 'rice',
        label: 'Рис',
    },
    {
        value: 'cabbage',
        label: 'Капуста',
    },
    {
        value: 'beans',
        label: 'Фасоль',
    },
    {
        value: 'other',
        label: 'Другие овощи',
    },
];

export const recipes: Recipe[] = [
    {
        id: '0',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        category: ['vegan', 'second-dish'],
        subcategory: ['snacks', 'vegetables'],
        image: recipe1Img,
        bookmarks: 85,
        likes: 152,
        date: '2025-02-28T00:00:00Z',
        time: '40 минут',
        portions: 2,
        nutritionValue: { calories: 250, proteins: 5, fats: 8, carbohydrates: 40 },
        ingredients: [
            { title: 'картошка', count: '4', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '2', measureUnit: 'шт.' },
            { title: 'фасоль', count: '200', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать картошку и перец.',
                image: recipe1Step1,
            },
            {
                stepNumber: 2,
                description: 'Обжарить лук до золотистого цвета.',
                image: recipe1Step2,
            },
            {
                stepNumber: 3,
                description: 'Добавить картошку, перец и фасоль, залить соусом.',
                image: recipe1Step3,
            },
            {
                stepNumber: 4,
                description: 'Тушить на медленном огне 30 минут.',
                image: recipe1Step4,
            },
        ],
        meat: '',
        side: 'potatoes',
    },
    {
        id: '1',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        category: ['vegan', 'snacks'],
        subcategory: ['snacks', 'warm-snacks'],
        image: recipe2Img,
        bookmarks: 85,
        likes: 1152,
        date: '2024-02-20T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить картошку и сделать пюре.',
                image: recipe2Step1,
            },
            {
                stepNumber: 2,
                description: 'Обжарить грибы до готовности.',
                image: recipe2Step2,
            },
            {
                stepNumber: 3,
                description: 'Сформировать рулетики и обжарить.',
                image: recipe2Step3,
            },
        ],
        side: 'potatoes',
    },
    {
        id: '2',
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья готовится с овощным соусом и соусом бешамель, а вместо листов для лазаньи используется тонкий лаваш.',
        category: ['vegan', 'second-dish', 'national'],
        subcategory: ['second-dish', 'vegetables', 'italian', 'snacks'],
        image: recipe3Img,
        bookmarks: 85,
        likes: 152,
        date: '2023-01-25T00:00:00Z',
        time: '1 час',
        portions: 1,
        nutritionValue: { calories: 300, proteins: 12, fats: 8, carbohydrates: 45 },
        ingredients: [
            { title: 'лаваш', count: '3', measureUnit: 'листов' },
            { title: 'овощной соус', count: '300', measureUnit: 'мл' },
            { title: 'соус бешамель', count: '200', measureUnit: 'мл' },
            { title: 'сыр', count: '100', measureUnit: 'г' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Приготовить соусы.',
                image: recipe3Step1,
            },
            {
                stepNumber: 2,
                description: 'Сложить слои лазаньи.',
                image: recipe3Step2,
            },
            {
                stepNumber: 3,
                description: 'Запекать 30 минут.',
            },
        ],
    },
    {
        id: '3',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['vegan', 'second-dish'],
        subcategory: ['second-dish', 'poultry-dish'],
        image: recipe4Img,
        bookmarks: 85,
        likes: 152,
        date: '2023-02-15T00:00:00Z',
        time: '50 минут',
        portions: 4,
        nutritionValue: { calories: 200, proteins: 10, fats: 5, carbohydrates: 30 },
        ingredients: [
            { title: 'булгур', count: '150', measureUnit: 'г' },
            { title: 'чечевица', count: '100', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Смешать булгур и чечевицу.',
                image: recipe4Step1,
            },
            {
                stepNumber: 2,
                description: 'Сформировать тефтели и запечь.',
                image: recipe4Step2,
            },
            {
                stepNumber: 3,
                description: 'Подавать с соусом.',
            },
        ],
    },
    {
        id: '4',
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'second-dish', 'vegetables'],
        image: recipe5Img,
        bookmarks: 124,
        likes: 342,
        date: '2024-03-01T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 220, proteins: 4, fats: 7, carbohydrates: 35 },
        ingredients: [
            { title: 'картошка', count: '6', measureUnit: 'шт.' },
            { title: 'чеснок', count: '5', measureUnit: 'зубчиков' },
            { title: 'масло', count: '50', measureUnit: 'мл' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Очистить и нарезать картошку.',
                image: recipe5Step1,
            },
            {
                stepNumber: 2,
                description: 'Обжарить с чесноком.',
            },
            {
                stepNumber: 3,
                description: 'Подавать горячей.',
                image: recipe5Step3,
            },
        ],
        side: 'potatoes',
    },
    {
        id: '5',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        category: ['vegan'],
        subcategory: ['second-dish', 'snacks'],
        image: recipe6Img,
        bookmarks: 2,
        likes: 1,
        date: '2024-02-05T00:00:00Z',
        time: '35 минут',
        portions: 4,
        nutritionValue: { calories: 150, proteins: 5, fats: 4, carbohydrates: 20 },
        ingredients: [
            { title: 'капуста', count: '300', measureUnit: 'г' },
            { title: 'мука', count: '50', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать капусту и отварить.',
                image: recipe6Step1,
            },
            {
                stepNumber: 2,
                description: 'Смешать с мукой и сформировать котлеты.',
                image: recipe6Step2,
            },
            {
                stepNumber: 3,
                description: 'Обжарить до золотистой корочки.',
                image: recipe6Step3,
            },
        ],
    },
    {
        id: '6',
        title: 'Овощное рагу',
        description: 'Сытное рагу из сезонных овощей, приправленное травами.',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'vegetables', 'snacks'],
        image: recipe7Img,
        bookmarks: 8,
        likes: 60,
        date: '2023-03-12T00:00:00Z',
        time: '1 час',
        portions: 2,
        nutritionValue: { calories: 200, proteins: 5, fats: 8, carbohydrates: 30 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'морковь', count: '1', measureUnit: 'шт.' },
            { title: 'картошка', count: '2', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать все овощи.',
                image: recipe7Step1,
            },
            {
                stepNumber: 2,
                description: 'Обжарить на сковороде.',
                image: recipe7Step2,
            },
            {
                stepNumber: 3,
                description: 'Добавить специи и тушить до готовности.',
                image: recipe7Step3,
            },
        ],
    },
    {
        id: '7',
        title: 'Лапша с курицей и шафраном',
        description: 'Ароматная лапша с курицей и шафраном, идеальное сочетание для сытного обеда.',
        category: ['second-dish'],
        subcategory: ['poultry-dish'],
        image: recipe8Img,
        bookmarks: 258,
        likes: 1342,
        date: '2024-03-08T00:00:00Z',
        time: '40 минут',
        portions: 4,
        nutritionValue: { calories: 400, proteins: 30, fats: 15, carbohydrates: 50 },
        ingredients: [
            { title: 'лапша', count: '200', measureUnit: 'г' },
            { title: 'курица', count: '300', measureUnit: 'г' },
            { title: 'шафран', count: '1', measureUnit: 'ч. л.' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить лапшу.',
                image: recipe8Step1,
            },
            {
                stepNumber: 2,
                description: 'Обжарить курицу с луком и шафраном.',
                image: recipe8Step2,
            },
            {
                stepNumber: 3,
                description: 'Смешать лапшу с курицей и подавать.',
            },
        ],
    },
    {
        id: '8',
        title: 'Гриль-салат с овощами',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: recipe9Img,
        bookmarks: 10,
        likes: 80,
        date: '2023-03-20T00:00:00Z',
        portions: 2,
        time: '25 минут',
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: recipe9Step1,
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: recipe9Step2,
            },
        ],
    },
    {
        id: '9',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        category: ['vegan', 'snacks'],
        subcategory: ['snacks', 'warm-snacks'],
        image: recipe2Img,
        bookmarks: 85,
        likes: 1152,
        date: '2024-02-20T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить картошку и сделать пюре.',
                image: recipe2Step1,
            },
            {
                stepNumber: 2,
                description: 'Обжарить грибы до готовности.',
                image: recipe2Step2,
            },
            {
                stepNumber: 3,
                description: 'Сформировать рулетики и обжарить.',
                image: recipe2Step3,
            },
        ],
        side: 'potatoes',
    },
];
