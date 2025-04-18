import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { CategoryTabs } from '~/components/shared/category-tabs/category-tabs';
import { HeroSection } from '~/components/shared/hero-section/hero-section';
import { RelevantKitchenSection } from '~/components/shared/relevant-kitchen-section/relevant-kitchen-section';
import { recipes } from '~/constants/recipes';

export const CategoryPage = () => (
    <Flex direction='column' align='center'>
        <HeroSection
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />

        <CategoryTabs />

        <Outlet />

        <RelevantKitchenSection
            title='Десерты, выпечка'
            description='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
            recipesTextCards={recipes.slice(0, 2)}
            recipesSimpleCards={recipes.slice(2, 5)}
        />
    </Flex>
);
