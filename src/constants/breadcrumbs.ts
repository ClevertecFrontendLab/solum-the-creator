export type RouteNode = {
    path: string;
    name: string;
    children?: RouteNode[];
};

export type Breadcrumb = {
    label: string;
    href: string;
};

export const routeTree: RouteNode[] = [
    {
        path: '',
        name: 'Главная',
    },
    {
        path: 'juiciest',
        name: 'Самое сочное',
    },
    {
        path: 'vegan',
        name: 'Веганская кухня',
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
