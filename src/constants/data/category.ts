export const categories = {
    salads: { value: 'salads', label: 'Салаты' },
    snacks: { value: 'snacks', label: 'Закуски' },
    'first-dish': { value: 'first-dish', label: 'Первые блюда' },
    'second-dish': { value: 'second-dish', label: 'Вторые блюда' },
    'desserts-and-baking': { value: 'desserts-and-baking', label: 'Десерты, выпечка' },
    grill: { value: 'grill', label: 'Блюда на гриле' },
    vegan: { value: 'vegan', label: 'Веганская кухня' },
    kids: { value: 'kids', label: 'Детские блюда' },
    medical: { value: 'medical', label: 'Лечебное питание' },
    national: { value: 'national', label: 'Национальные блюда' },
    sauces: { value: 'sauces', label: 'Соусы' },
    preserves: { value: 'preserves', label: 'Заготовки' },
    drinks: { value: 'drinks', label: 'Напитки' },
} as const;

export type CategoryValue = keyof typeof categories;

export const categoryText: Record<CategoryValue, { title: string; description: string }> = {
    salads: {
        title: 'Салаты',
        description: 'Классические салаты и веганские салаты.',
    },
    vegan: {
        title: 'Веганская кухня',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
    },
    snacks: {
        title: 'Закуски',
        description: 'Сладости, снеки, салаты и другие закуски.',
    },
    'first-dish': {
        title: 'Первые блюда',
        description: 'Популярные первые блюда. Классические салаты и веганские салаты.',
    },
    'second-dish': {
        title: 'Вторые блюда',
        description: 'Популярные вторые блюда. Поражающие вкуса блюда.',
    },
    'desserts-and-baking': {
        title: 'Десерты, выпечка',
        description:
            'Без них невозможно представить себе ни современную, ни традиционную кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.',
    },
    grill: {
        title: 'Блюда на гриле',
        description: 'Классические блюда на гриле, сытные и вкусные.',
    },
    kids: {
        title: 'Детские блюда',
        description: 'Блюда для детей и маленьких любителей.',
    },
    medical: {
        title: 'Лечебное питание',
        description: 'Классические блюда для лечебного питания.',
    },
    national: {
        title: 'Национальные блюда',
        description: 'Рецепты изделий из теста многообразны и невероятно популярны.',
    },
    sauces: {
        title: 'Соусы',
        description: 'Все соусы, которые вы можете приготовить.',
    },
    preserves: {
        title: 'Заготовки',
        description: 'Подойдут как для холодных закусок, так и для горячих блюд.',
    },
    drinks: {
        title: 'Напитки',
        description: 'Приготовить напитки не сложно. Выберите любимый напиток.',
    },
};
