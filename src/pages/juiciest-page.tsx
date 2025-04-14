import { Flex } from '@chakra-ui/react';

import { HeroSection } from '~/components/shared/hero-section/hero-section';
import { RecipeHorizontalGridSection } from '~/components/shared/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { recipes } from '~/constants/recipes';

export const JuiciestPage = () => (
    <Flex direction='column' align='center'>
        <HeroSection title='Самое сочное' />
        <RecipeHorizontalGridSection recipes={recipes} />
    </Flex>
);
