import avatarImg from '~/assets/images/avatar.jpg';

export type BlogAuthor = {
    id: number;
    avatarUrl: string;
    fullName: string;
    userName: string;
    description: string;
    followers?: number;
};

export const authors: BlogAuthor[] = [
    {
        id: 1,
        avatarUrl: avatarImg,
        fullName: 'Елена Высоцкая',
        userName: 'elenapovar',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        followers: 78,
    },
    {
        id: 2,
        avatarUrl: avatarImg,
        fullName: 'Alex Cook',
        userName: 'funtasticooking',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 3,
        avatarUrl: avatarImg,
        fullName: 'Екатерина Константинопольская',
        userName: 'bake_and_pie',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
