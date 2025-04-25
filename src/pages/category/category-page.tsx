import { Flex } from '@chakra-ui/react';
import { Outlet, useParams } from 'react-router';

import { HeroSection } from '~/components/shared/hero-section/hero-section';
import { CategoryTabs } from '~/components/widgets/category-tabs/category-tabs';
import { RelevantKitchenSection } from '~/components/widgets/relevant-kitchen-section/relevant-kitchen-section';
import { categoryText, CategoryValue } from '~/constants/data/category';
import { recipes } from '~/constants/data/recipes';

export const CategoryPage = () => {
    const { category } = useParams<{ category: CategoryValue }>();

    return (
        <Flex direction='column' align='center'>
            <HeroSection
                title={categoryText[category!].title}
                description={categoryText[category!].description}
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
};
