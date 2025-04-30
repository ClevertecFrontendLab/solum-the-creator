import { Box, Heading } from '@chakra-ui/react';

import { RecipeCardVertical } from '~/components/cards/recipe-card-vertical/recipe-card-vertical';
import { FullBleed } from '~/components/shared/misc/full-bleed/full-bleed';
import { HorizontalSlider } from '~/components/ui/horizontal-slider/horizontal-slider';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useGetRecipesQuery } from '~/query/services/recipe';

export const NewRecipesSection = () => {
    const recipesCount = 10;
    const { data: recipes, isLoading } = useGetRecipesQuery(recipesCount);

    useGlobalLoading(isLoading);

    return (
        <Box as='section' position='relative' width='100%'>
            <Heading mb={{ base: 3, md: 6 }} variant='section-title'>
                Новые рецепты
            </Heading>

            <FullBleed>
                {recipes && (
                    <HorizontalSlider
                        items={recipes}
                        renderItem={(recipe) => (
                            <RecipeCardVertical
                                key={recipe._id}
                                id={recipe._id}
                                title={recipe.title}
                                description={recipe.description}
                                image={recipe.image}
                                categoriesIds={recipe.categoriesIds}
                                likes={recipe.likes}
                                bookmarks={recipe.bookmarks}
                                forceFromRecipe={true}
                            />
                        )}
                    />
                )}
            </FullBleed>
        </Box>
    );
};
