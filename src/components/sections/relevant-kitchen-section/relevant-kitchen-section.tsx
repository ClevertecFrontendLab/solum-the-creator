import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { RecipeTextCard } from '~/components/cards/recipe-text-card';
import { SimpleRecipeCard } from '~/components/cards/simple-recipe-card';
import { useRandomCategoryRecipes } from '~/hooks/use-random-category-recipes';

type RelevantKitchenSectionProps = {
    currentCategoryId?: string;
};

export const RelevantKitchenSection: React.FC<RelevantKitchenSectionProps> = ({
    currentCategoryId,
}) => {
    const { category, recipes } = useRandomCategoryRecipes(currentCategoryId);

    const recipesTextCard = recipes.slice(0, 2);
    const recipesSimpleCard = recipes.slice(2);

    if (!category) return null;

    return (
        <Box
            as='section'
            mt={{ base: 8, md: 10 }}
            mb={4}
            pt={{ base: 2, md: 6 }}
            borderTop='1px solid'
            borderColor='blackAlpha.200'
            width='100%'
        >
            <Grid
                templateColumns={{
                    base: '1fr',
                    sm: 'repeat(3, 1fr)',
                    xl: 'repeat(3, 1fr)',
                    '2xl': 'repeat(4, 1fr)',
                }}
                gap={{ base: 3, md: 4, xl: 4, '2xl': 6 }}
                mb={{ base: 4, lg: 6 }}
            >
                <GridItem colSpan={{ base: 1, sm: 3, xl: 1, '2xl': 2 }} minW={0}>
                    <Heading variant='section-title' lineHeight={1}>
                        {category.title}
                    </Heading>
                </GridItem>
                <GridItem colSpan={{ base: 1, sm: 3, xl: 2, '2xl': 2 }} minW={0}>
                    <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        fontWeight='500'
                        color='blackAlpha.700'
                    >
                        {category.description}
                    </Text>
                </GridItem>
            </Grid>

            <Grid
                templateColumns={{
                    base: '1fr',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(2, 1fr)',
                    xl: 'repeat(3, 1fr)',
                    '2xl': 'repeat(4, 1fr)',
                }}
                gap={{ base: 3, lg: 4, '2xl': 6 }}
                alignItems='start'
            >
                {recipesTextCard.map((recipesTextCard) => (
                    <GridItem key={recipesTextCard._id} colSpan={1} minW={0} alignItems='start'>
                        <RecipeTextCard
                            id={recipesTextCard._id}
                            categoriesIds={recipesTextCard.categoriesIds}
                            title={recipesTextCard.title}
                            description={recipesTextCard.description}
                            likes={recipesTextCard.likes}
                            bookmarks={recipesTextCard.bookmarks}
                        />
                    </GridItem>
                ))}

                <GridItem
                    colSpan={{ base: 1, sm: 1, md: 2, xl: 1, '2xl': 2 }}
                    minW={0}
                    height='100%'
                >
                    <Grid gap={3} w='100%' height='100%'>
                        {recipesSimpleCard.map(({ _id, title, categoriesIds }) => (
                            <SimpleRecipeCard
                                key={_id}
                                id={_id}
                                title={title}
                                categoriesIds={categoriesIds}
                            />
                        ))}
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    );
};
