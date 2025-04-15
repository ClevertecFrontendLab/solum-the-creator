import avatarImg from '~/assets/images/avatar-sm.jpg';
import recipeImg1 from '~/assets/recipes/recipe-1.jpg';
import { CategoryKey } from '~/constants/ui/category-icons';

export type Recipe = {
    id: number;
    image: string;
    title: string;
    description: string;
    category: CategoryKey;
    likes?: number;
    saved?: number;
    recipeText?: string;
    reccomendedBy?: {
        avatarUrl: string;
        fullName: string;
    };
};

export const recipes: Recipe[] = [
    {
        id: 1,
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'second-dishes',
        likes: 120,
        saved: 90,
        recipeText:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        reccomendedBy: {
            avatarUrl: avatarImg,
            fullName: 'Alex Cook',
        },
    },
    {
        id: 2,
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        recipeText:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
        id: 3,
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
        reccomendedBy: {
            avatarUrl: avatarImg,
            fullName: 'Alex Cook',
        },
    },
    {
        id: 4,
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
        id: 5,
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
        id: 6,
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
        id: 7,
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
        id: 8,
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
];
