import { Flex } from '@chakra-ui/react';

import { JuiciestSection } from '~/components/home/juiciest-section';
import { NewRecipesSection } from '~/components/home/new-recipes-section';
import { HeroSection } from '~/components/shared/hero-section/hero-section';

export const HomePage = () => (
    <Flex direction='column' align='center'>
        <HeroSection title='Приятного аппетита!' />

        <NewRecipesSection />
        <JuiciestSection />
    </Flex>
);
