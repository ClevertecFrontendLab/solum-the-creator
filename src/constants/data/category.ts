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
