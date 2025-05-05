import { Flex } from '@chakra-ui/react';
import { Navigate, Outlet, useParams } from 'react-router';

import { HeroSection } from '~/components/sections/hero-section/hero-section';
import { RelevantKitchenSection } from '~/components/sections/relevant-kitchen-section/relevant-kitchen-section';
import { CategoryTabs } from '~/components/shared/navigation/category-tabs/category-tabs';
import { pathes } from '~/constants/navigation/pathes';
import { selectCategoryBySlug } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

export const CategoryPage = () => {
    const { category: categorySlug } = useParams<{ category: string }>();

    const category = useAppSelector(selectCategoryBySlug(categorySlug!));

    if (!category) {
        return <Navigate to={pathes.notFound} replace />;
    }

    return (
        <Flex direction='column' align='center'>
            <HeroSection title={category.title} description={category.description} />

            <Flex direction='column' align='center' width='100%' px={{ base: 4, sm: 5, md: 6 }}>
                <CategoryTabs />

                <Outlet />

                <RelevantKitchenSection currentCategoryId={category._id} />
            </Flex>
        </Flex>
    );
};
