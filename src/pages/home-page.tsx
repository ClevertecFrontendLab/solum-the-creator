import { Flex } from '@chakra-ui/react';

import { CulinaryBlogsSection } from '~/components/home/culinary-blogs-section';
import { JuiciestSection } from '~/components/home/juiciest-section';
import { NewRecipesSection } from '~/components/home/new-recipes-section';
import { HeroSection } from '~/components/shared/hero-section/hero-section';

export const HomePage = () => (
    <Flex direction='column' align='center'>
        <HeroSection title='Приятного аппетита!' />
        <NewRecipesSection />
        <JuiciestSection />
        <CulinaryBlogsSection />
    </Flex>
);
