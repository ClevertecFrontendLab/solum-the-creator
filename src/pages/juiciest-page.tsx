import { Flex } from '@chakra-ui/react';

import { HeroSection } from '~/components/shared/hero-section/hero-section';
import { RecipeHorizontalGridSection } from '~/components/widgets/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { RelevantKitchenSection } from '~/components/widgets/relevant-kitchen-section/relevant-kitchen-section';
import { recipes } from '~/constants/recipes';

export const JuiciestPage = () => (
    <Flex direction='column' align='center'>
        <HeroSection title='Самое сочное' />
        <RecipeHorizontalGridSection recipes={recipes} />
        <RelevantKitchenSection
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            recipesTextCards={recipes.slice(0, 2)}
            recipesSimpleCards={recipes.slice(2, 5)}
        />
    </Flex>
);
