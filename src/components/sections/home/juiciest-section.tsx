import { Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { RecipeCardHorizontal } from '~/components/cards/recipe-card-horizontal/recipe-card-horizontal';
import { JuiciestButton } from '~/components/shared/buttons/juiciest-button';
import { recipes } from '~/constants/data/recipes';
import { getPopularRecipes } from '~/utils/sort';

export const JuiciestSection = () => {
    const popularRecipes = getPopularRecipes(recipes).slice(0, 4);
    return (
        <VStack
            as='section'
            pt={{ base: 6, md: 8 }}
            pb={{ base: 8, md: 10 }}
            spacing={{ base: 3, lg: 4, '2xl': 6 }}
            width='100%'
        >
            <HStack justify='space-between' align='center' width='100%'>
                <Heading variant='section-title'>Самое сочное</Heading>

                <JuiciestButton
                    display={{ base: 'none', lg: 'block' }}
                    data-test-id='juiciest-link'
                />
            </HStack>

            <SimpleGrid
                width='100%'
                spacing={{ base: 3, sm: 4, '2xl': 6 }}
                columns={{ base: 1, sm: 2, md: 1, '2xl': 2 }}
            >
                {popularRecipes.map((recipe, index) => (
                    <RecipeCardHorizontal
                        key={recipe.id}
                        id={recipe.id}
                        index={index}
                        image={recipe.image}
                        title={recipe.title}
                        description={recipe.description}
                        category={recipe.category}
                        subcategory={recipe.subcategory}
                        likes={recipe.likes}
                        bookmarks={recipe.bookmarks}
                    />
                ))}
            </SimpleGrid>

            <JuiciestButton
                display={{ base: 'block', lg: 'none' }}
                data-test-id='juiciest-link-mobile'
            />
        </VStack>
    );
};
