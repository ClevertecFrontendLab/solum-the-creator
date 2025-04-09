export type RouteNode = {
    path: string;
    name: string;
    children?: RouteNode[];
    type?: 'category' | 'page';
};

export type Breadcrumb = {
    label: string;
    href: string;
};

export const routeTree: RouteNode[] = [
    {
        path: '',
        name: 'Главная',
        type: 'page',
    },
    {
        path: 'juiciest',
        name: 'Самое сочное',
        type: 'page',
    },
    {
        path: 'vegan',
        name: 'Веганская кухня',
        type: 'category',
        children: [
            {
                path: 'snacks',
                name: 'Закуски',
            },
            {
                path: 'first-dishes',
                name: 'Первые блюда',
            },
            {
                path: 'second-dishes',
                name: 'Вторые блюда',
            },
            {
                path: 'side-dishes',
                name: 'Гарниры',
            },
            {
                path: 'desserts',
                name: 'Десерты',
            },
            {
                path: 'baking',
                name: 'Выпечка',
            },
            {
                path: 'raw-food-dishes',
                name: 'Сыроедческие блюда',
            },
            {
                path: 'drinks',
                name: 'Напитки',
            },
        ],
    },
];
