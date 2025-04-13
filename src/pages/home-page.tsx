import { Flex } from '@chakra-ui/react';

import { NewRecipesSection } from '~/components/home/new-recipes-section';
import { HeroSection } from '~/components/shared/hero-section/hero-section';

export const HomePage = () => (
    <Flex direction='column' align='center' h={6}>
        <HeroSection title='Приятного аппетита!' />

        <NewRecipesSection />
    </Flex>
);
