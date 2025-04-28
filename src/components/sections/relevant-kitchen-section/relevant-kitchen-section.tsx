import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { RecipeTextCard } from '~/components/cards/recipe-text-card';
import { SimpleRecipeCard } from '~/components/cards/simple-recipe-card';
import { Recipe } from '~/constants/data/recipes';

type RelevantKitchenSectionProps = {
    title: string;
    description: string;
    recipesTextCards: Recipe[];
    recipesSimpleCards: Recipe[];
};

export const RelevantKitchenSection: React.FC<RelevantKitchenSectionProps> = ({
    title,
    description,
    recipesTextCards: [recipesTextCard1, recipesTextCard2],
    recipesSimpleCards,
}) => (
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
                    {title}
                </Heading>
            </GridItem>
            <GridItem colSpan={{ base: 1, sm: 3, xl: 2, '2xl': 2 }} minW={0}>
                <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='500' color='blackAlpha.700'>
                    {description}
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
            <GridItem colSpan={1} minW={0}>
                <RecipeTextCard
                    id={recipesTextCard1.id}
                    category={recipesTextCard1.category[0]}
                    subcategory={recipesTextCard1.subcategory}
                    title={recipesTextCard1.title}
                    description={recipesTextCard1.description}
                    likes={recipesTextCard1.likes}
                    bookmarks={recipesTextCard1.bookmarks}
                />
            </GridItem>

            <GridItem colSpan={1} minW={0}>
                <RecipeTextCard
                    id={recipesTextCard2.id}
                    category={recipesTextCard2.category[0]}
                    subcategory={recipesTextCard2.subcategory}
                    title={recipesTextCard2.title}
                    description={recipesTextCard2.description}
                    likes={recipesTextCard2.likes}
                    bookmarks={recipesTextCard2.bookmarks}
                />
            </GridItem>

            <GridItem colSpan={{ base: 1, sm: 1, md: 2, xl: 1, '2xl': 2 }} minW={0} height='100%'>
                <Grid gap={3} w='100%' height='100%'>
                    {recipesSimpleCards.map(({ id, title, subcategory, category }, index) => (
                        <SimpleRecipeCard
                            key={index}
                            id={id}
                            title={title}
                            category={category[0]}
                            subcategory={subcategory}
                        />
                    ))}
                </Grid>
            </GridItem>
        </Grid>
    </Box>
);
