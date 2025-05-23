import { categories } from '../data/category';

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
        path: 'the-juiciest',
        name: 'Самое сочное',
        type: 'page',
    },
    {
        path: categories.salads.value,
        name: categories.salads.label,
        type: 'category',
        children: [
            { path: 'meat', name: 'Мясные салаты' },
            { path: 'fish', name: 'Рыбные салаты' },
            { path: 'vegetable', name: 'Овощные салаты' },
            { path: 'warm-salads', name: 'Теплые салаты' },
        ],
    },
    {
        path: categories.snacks.value,
        name: categories.snacks.label,
        type: 'category',
        children: [
            { path: 'meat', name: 'Мясные закуски' },
            { path: 'fish', name: 'Рыбные закуски' },
            { path: 'vegetable', name: 'Овощные закуски' },
            { path: 'warm', name: 'Теплые закуски' },
            { path: 'sandwiches', name: 'Бутерброды' },
            { path: 'fast-food', name: 'Фастфуд' },
        ],
    },
    {
        path: categories['first-dish'].value,
        name: categories['first-dish'].label,
        type: 'category',
        children: [
            { path: 'meat', name: 'Мясные супы' },
            { path: 'vegetable', name: 'Овощные супы' },
            { path: 'broths', name: 'Бульоны' },
            { path: 'cold', name: 'Холодные супы' },
            { path: 'diet', name: 'Диетические супы' },
        ],
    },
    {
        path: categories['second-dish'].value,
        name: categories['second-dish'].label,
        type: 'category',
        children: [
            { path: 'meat', name: 'Мясные' },
            { path: 'fish', name: 'Рыбные' },
            { path: 'vegetable', name: 'Овощные' },
            { path: 'poultry-dish', name: 'Из птицы' },
            { path: 'mushrooms', name: 'Из грибов' },
            { path: 'offal', name: 'Из субпродуктов' },
            { path: 'steamed', name: 'На пару' },
            { path: 'dumplings', name: 'Пельмени, вареники' },
            { path: 'flour-side', name: 'Мучные гарниры' },
            { path: 'veg-side', name: 'Овощные гарниры' },
            { path: 'pizza', name: 'Пицца' },
            { path: 'sushi', name: 'Суши' },
        ],
    },
    {
        path: categories['desserts-and-baking'].value,
        name: categories['desserts-and-baking'].label,
        type: 'category',
        children: [
            { path: 'pancakes', name: 'Блины и оладьи' },
            { path: 'pies', name: 'Пироги и пончики' },
            { path: 'cakes', name: 'Торты' },
            { path: 'rolls', name: 'Рулеты' },
            { path: 'muffins', name: 'Кексы и маффины' },
            { path: 'cheesecakes', name: 'Сырники и ватрушки' },
            { path: 'puff', name: 'Из слоеного теста' },
            { path: 'choux', name: 'Из заварного теста' },
            { path: 'yeast', name: 'Из дрожжевого теста' },
            { path: 'buns', name: 'Булочки и сдоба' },
            { path: 'bread', name: 'Хлеб' },
            { path: 'pizza-dough', name: 'Тесто на пиццу' },
            { path: 'creams', name: 'Кремы' },
        ],
    },
    {
        path: categories.grill.value,
        name: categories.grill.label,
        type: 'category',
        children: [
            { path: 'beef', name: 'Говядина' },
            { path: 'pork', name: 'Свинина' },
            { path: 'poultry', name: 'Птица' },
            { path: 'fish', name: 'Рыба' },
            { path: 'mushrooms', name: 'Грибы' },
            { path: 'vegetables', name: 'Овощи' },
        ],
    },
    {
        path: categories.vegan.value,
        name: categories.vegan.label,
        type: 'category',
        children: [
            { path: 'snacks', name: 'Закуски' },
            { path: 'first-dish', name: 'Первые блюда' },
            { path: 'second-dish', name: 'Вторые блюда' },
            { path: 'side-dishes', name: 'Гарниры' },
            { path: 'desserts', name: 'Десерты' },
            { path: 'baking', name: 'Выпечка' },
            { path: 'raw-food-dishes', name: 'Сыроедческие блюда' },
            { path: 'drinks', name: 'Напитки' },
        ],
    },
    {
        path: categories.kids.value,
        name: categories.kids.label,
        type: 'category',
        children: [
            { path: 'first', name: 'Первые блюда' },
            { path: 'second', name: 'Вторые блюда' },
            { path: 'sides', name: 'Гарниры' },
            { path: 'baking', name: 'Выпечка' },
            { path: 'gluten-free', name: 'Без глютена' },
            { path: 'sugar-free', name: 'Без сахара' },
            { path: 'allergen-free', name: 'Без аллергенов' },
            { path: 'baby-food', name: 'Блюда для прикорма' },
        ],
    },
    {
        path: categories.medical.value,
        name: categories.medical.label,
        type: 'category',
        children: [
            { path: 'kids', name: 'Детская диета' },
            { path: 'diet-1', name: 'Диета №1' },
            { path: 'diet-2', name: 'Диета №2' },
            { path: 'diet-3', name: 'Диета №3' },
            { path: 'diet-5', name: 'Диета №5' },
            { path: 'diet-6', name: 'Диета №6' },
            { path: 'diet-7', name: 'Диета №7' },
            { path: 'diet-8', name: 'Диета №8' },
            { path: 'diet-9', name: 'Диета №9' },
            { path: 'diet-10', name: 'Диета №10' },
            { path: 'diet-11', name: 'Диета №11' },
            { path: 'diet-12', name: 'Диета №12' },
            { path: 'diet-13', name: 'Диета №13' },
            { path: 'diet-14', name: 'Диета №14' },
            { path: 'gluten-free', name: 'Без глютена' },
            { path: 'allergen-free', name: 'Без аллергенов' },
        ],
    },
    {
        path: categories.national.value,
        name: categories.national.label,
        type: 'category',
        children: [
            { path: 'american', name: 'Американская кухня' },
            { path: 'armenian', name: 'Армянская кухня' },
            { path: 'greek', name: 'Греческая кухня' },
            { path: 'georgian', name: 'Грузинская кухня' },
            { path: 'italian', name: 'Итальянская кухня' },
            { path: 'spanish', name: 'Испанская кухня' },
            { path: 'chinese', name: 'Китайская кухня' },
            { path: 'mexican', name: 'Мексиканская кухня' },
            { path: 'panasian', name: 'Паназиатская кухня' },
            { path: 'russian', name: 'Русская кухня' },
            { path: 'turkish', name: 'Турецкая кухня' },
            { path: 'french', name: 'Французская кухня' },
            { path: 'swedish', name: 'Шведская кухня' },
            { path: 'japanese', name: 'Японская кухня' },
            { path: 'other', name: 'Другая кухня' },
        ],
    },
    {
        path: categories.sauces.value,
        name: categories.sauces.label,
        type: 'category',
        children: [
            { path: 'meat', name: 'Соусы мясные' },
            { path: 'cheese', name: 'Соусы сырные' },
            { path: 'marinades', name: 'Маринады' },
        ],
    },

    {
        path: categories.drinks.value,
        name: categories.drinks.label,
        type: 'category',
        children: [
            { path: 'juices', name: 'Соки и фреши' },
            { path: 'smoothies', name: 'Смузи' },
            { path: 'compotes', name: 'Компоты' },
            { path: 'kissels', name: 'Кисели' },
            { path: 'coffee', name: 'Кофе' },
            { path: 'tea', name: 'Лечебный чай' },
            { path: 'kvass', name: 'Квас' },
            { path: 'cocktails', name: 'Коктейли' },
            { path: 'alcohol', name: 'Алкогольные' },
        ],
    },
    {
        path: categories.preserves.value,
        name: categories.preserves.label,
        type: 'category',
        children: [
            { path: 'meat', name: 'Мясные заготовки' },
            { path: 'fish', name: 'Рыбные заготовки' },
            { path: 'cucumber', name: 'Из огурцов' },
            { path: 'tomato', name: 'Из томатов' },
            { path: 'mushroom', name: 'Из грибов' },
            { path: 'vegetable', name: 'Овощные заготовки' },
            { path: 'salads', name: 'Салаты, икра' },
            { path: 'fruits', name: 'Из фруктов и ягод' },
        ],
    },
] as const;
