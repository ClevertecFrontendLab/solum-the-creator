import { Flex } from '@chakra-ui/react';

import { HeroSection } from '~/components/shared/hero-section/hero-section';
import { RecipeHorizontalGridSection } from '~/components/widgets/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { RelevantKitchenSection } from '~/components/widgets/relevant-kitchen-section/relevant-kitchen-section';
import { recipes } from '~/constants/data/recipes';
import { useAllergenFilteredRecipes } from '~/hooks/use-allergen-filtered-recipes';
import { useFilteredRecipes } from '~/hooks/use-filtered-recipes';
import { useSearchedRecipes } from '~/hooks/use-serched-recipes';
import { useAppSelector } from '~/store/hooks';
import { selectIsDrawerFilterApplied } from '~/store/recipe-filter/selectors';
import { getPopularRecipes } from '~/utils/sort';

export const JuiciestPage = () => {
    const popularRecipes = getPopularRecipes(recipes);
    const filteredAllergenRecipes = useAllergenFilteredRecipes(popularRecipes);

    const isDrawerFilterApplied = useAppSelector(selectIsDrawerFilterApplied);
    const filteredRecipes = useFilteredRecipes(popularRecipes);

    const filteredRicipesByUI = isDrawerFilterApplied ? filteredRecipes : filteredAllergenRecipes;

    const { recipes: finalRecipes } = useSearchedRecipes(filteredRicipesByUI);

    return (
        <Flex direction='column' align='center'>
            <HeroSection title='Самое сочное' />

            <Flex direction='column' align='center' width='100%' px={{ base: 4, sm: 5, md: 6 }}>
                <RecipeHorizontalGridSection recipes={finalRecipes} />
                <RelevantKitchenSection
                    title='Веганская кухня'
                    description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                    recipesTextCards={recipes.slice(0, 2)}
                    recipesSimpleCards={recipes.slice(2, 5)}
                />
            </Flex>
        </Flex>
    );
};
