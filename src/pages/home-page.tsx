import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import { CulinaryBlogsSection } from '~/components/features/home/culinary-blogs-section';
import { JuiciestSection } from '~/components/features/home/juiciest-section';
import { HeroSection } from '~/components/shared/hero-section/hero-section';
import { NewRecipesSection } from '~/components/shared/new-recipes-section/new-recipes-section';
import { RecipeHorizontalGridSection } from '~/components/widgets/recipe-horizontal-grid-section/recipe-horizontal-grid-section';
import { RelevantKitchenSection } from '~/components/widgets/relevant-kitchen-section/relevant-kitchen-section';
import { recipes } from '~/constants/data/recipes';
import { fadeIn } from '~/constants/motions/motion-presets';
import { useAllergenFilteredRecipes } from '~/hooks/use-allergen-filtered-recipes';
import { useFilteredRecipes } from '~/hooks/use-filtered-recipes';
import { useSearchedRecipes } from '~/hooks/use-serched-recipes';
import { selectIsAllergenFilterActive } from '~/store/allergen-filter/selectors';
import { useAppSelector } from '~/store/hooks';
import { selectIsDrawerFilterApplied } from '~/store/recipe-filter/selectors';

export const HomePage = () => {
    const isAllergenFilterActive = useAppSelector(selectIsAllergenFilterActive);
    const filteredAllergenRecipes = useAllergenFilteredRecipes(recipes);

    const isDrawerFilterApplied = useAppSelector(selectIsDrawerFilterApplied);
    const filteredRecipes = useFilteredRecipes(recipes);

    const filteredRicipesByUI = isDrawerFilterApplied ? filteredRecipes : filteredAllergenRecipes;

    const { recipes: finalRecipes, isSearchActive } = useSearchedRecipes(filteredRicipesByUI);

    return (
        <Flex direction='column' align='center'>
            <Box pb={{ base: 0, xl: 6 }} width='100%' px={{ base: 0, sm: 5, md: 6 }}>
                <HeroSection title='Приятного аппетита!' />
            </Box>

            <AnimatePresence mode='wait'>
                {isAllergenFilterActive || isDrawerFilterApplied || isSearchActive ? (
                    <motion.div key='filtered' {...fadeIn}>
                        <Box px={{ base: 4, sm: 5, md: 6 }}>
                            <RecipeHorizontalGridSection recipes={finalRecipes} />
                        </Box>
                    </motion.div>
                ) : (
                    <Flex
                        direction='column'
                        align='center'
                        width='100%'
                        px={{ base: 4, sm: 5, md: 6 }}
                    >
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
                )}
            </AnimatePresence>
        </Flex>
    );
};
