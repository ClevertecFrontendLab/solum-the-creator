import { Box, Flex } from '@chakra-ui/react';

import { CulinaryBlogsSection } from '~/components/features/home/culinary-blogs-section';
import { JuiciestSection } from '~/components/features/home/juiciest-section';
import { NewRecipesSection } from '~/components/features/home/new-recipes-section';
import { HeroSection } from '~/components/shared/hero-section/hero-section';
import { RelevantKitchenSection } from '~/components/widgets/relevant-kitchen-section/relevant-kitchen-section';
import { recipes } from '~/constants/recipes';

export const HomePage = () => (
    <Flex direction='column' align='center'>
        <Box pb={{ base: 0, xl: 6 }} width='100%'>
            <HeroSection title='Приятного аппетита!' />
        </Box>
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
