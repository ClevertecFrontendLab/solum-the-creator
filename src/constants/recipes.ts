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
