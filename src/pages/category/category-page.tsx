import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { CategoryTabs } from '~/components/shared/category-tabs/category-tabs';
import { HeroSection } from '~/components/shared/hero-section/hero-section';

export const CategoryPage = () => (
    <Flex direction='column' align='center'>
        <HeroSection
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />

        <CategoryTabs />

        <Outlet />
    </Flex>
);
