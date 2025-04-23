import { Flex } from '@chakra-ui/react';

import { HeroSection } from '~/components/shared/hero-section/hero-section';
import { RecipeHorizontalGridSection } from '~/components/widgets/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { RelevantKitchenSection } from '~/components/widgets/relevant-kitchen-section/relevant-kitchen-section';
import { recipes } from '~/constants/data/recipes';
import { useAllergenFilteredRecipes } from '~/hooks/use-allergen-filtered-recipes';

export const JuiciestPage = () => {
    const filteredRecipes = useAllergenFilteredRecipes(recipes);

    return (
        <Flex direction='column' align='center'>
            <HeroSection title='Самое сочное' />
            <RecipeHorizontalGridSection recipes={filteredRecipes} />
            <RelevantKitchenSection
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                recipesTextCards={recipes.slice(0, 2)}
                recipesSimpleCards={recipes.slice(2, 5)}
            />
        </Flex>
    );
};
