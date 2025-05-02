import { Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { RecipeCardHorizontal } from '~/components/cards/recipe-card-horizontal/recipe-card-horizontal';
import { JuiciestButton } from '~/components/shared/buttons/juiciest-button';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useGetJuiciestRecipesQuery } from '~/query/services/recipe';

export const JuiciestSection = () => {
    const limit = 4;
    const { data: recipes, isLoading } = useGetJuiciestRecipesQuery(limit);
    useGlobalLoading(isLoading);

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
                    display={{ base: 'none', lg: 'flex' }}
                    data-test-id='juiciest-link'
                />
            </HStack>

            {recipes && (
                <SimpleGrid
                    width='100%'
                    spacing={{ base: 3, sm: 4, '2xl': 6 }}
                    columns={{ base: 1, sm: 2, md: 1, '2xl': 2 }}
                >
                    {recipes.map((recipe, index) => (
                        <RecipeCardHorizontal
                            key={recipe._id}
                            id={recipe._id}
                            index={index}
                            image={recipe.image}
                            title={recipe.title}
                            description={recipe.description}
                            categoriesIds={recipe.categoriesIds}
                            likes={recipe.likes}
                            bookmarks={recipe.bookmarks}
                        />
                    ))}
                </SimpleGrid>
            )}

            <JuiciestButton
                display={{ base: 'flex', lg: 'none' }}
                data-test-id='juiciest-link-mobile'
            />
        </VStack>
    );
};
