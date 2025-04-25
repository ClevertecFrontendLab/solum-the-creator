import { Box, Heading } from '@chakra-ui/react';

import { RecipeCardVertical } from '~/components/shared/cards/recipe-card/recipe-card-vertical/recipe-card-vertical';
import { FullBleed } from '~/components/shared/full-bleed/full-bleed';
import { HorizontalSlider } from '~/components/ui/horizontal-slider/horizontal-slider';
import { recipes } from '~/constants/data/recipes';
import { getNewestRecipes } from '~/utils/sort';

export const NewRecipesSection = () => {
    const newRecipes = getNewestRecipes(recipes);

    return (
        <Box as='section' position='relative' width='100%'>
            <Heading mb={{ base: 3, md: 6 }} variant='section-title'>
                Новые рецепты
            </Heading>

            <FullBleed>
                <HorizontalSlider
                    items={newRecipes}
                    renderItem={(recipe) => (
                        <RecipeCardVertical
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.title}
                            description={recipe.description}
                            image={recipe.image}
                            category={recipe.category}
                            subcategory={recipe.subcategory}
                            likes={recipe.likes}
                            bookmarks={recipe.bookmarks}
                            forceFromRecipe={true}
                        />
                    )}
                />
            </FullBleed>
        </Box>
    );
};
