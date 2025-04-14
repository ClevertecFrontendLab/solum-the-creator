import { Flex } from '@chakra-ui/react';

import { CulinaryBlogsSection } from '~/components/home/culinary-blogs-section';
import { JuiciestSection } from '~/components/home/juiciest-section';
import { NewRecipesSection } from '~/components/home/new-recipes-section';
import { HeroSection } from '~/components/shared/hero-section/hero-section';
import { RelevantKitchenSection } from '~/components/shared/relevant-kitchen-section/relevant-kitchen-section';
import { recipes } from '~/constants/recipes';

export const HomePage = () => (
    <Flex direction='column' align='center'>
        <HeroSection title='Приятного аппетита!' />
        <NewRecipesSection />
        <JuiciestSection />
        <CulinaryBlogsSection />
        <RelevantKitchenSection
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            recipesTextCards={recipes.slice(0, 2)}
            recipesSimpleCards={recipes.slice(2, 5)}
        />
    </Flex>
);
