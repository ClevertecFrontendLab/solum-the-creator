import avatarImg from '~/assets/images/avatar-sm.jpg';
import recipeImg1 from '~/assets/recipes/recipe-1.jpg';
import { CategoryKey } from '~/constants/category-icons';

export type Recipe = {
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
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
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
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
];
