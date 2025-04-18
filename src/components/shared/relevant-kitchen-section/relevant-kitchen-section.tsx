import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { Recipe } from '~/constants/recipes';

import { RecipeTextCard } from '../cards/recipe-card/recipe-text-card';
import { SimpleRecipeCard } from '../cards/recipe-card/simple-recipe-card';

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
                <Heading
                    fontSize={{ base: '2xl', xl: '4xl', '2xl': '5xl' }}
                    fontWeight='500'
                    lineHeight={1}
                >
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
                    category={recipesTextCard1.category}
                    title={recipesTextCard1.title}
                    recipeText={recipesTextCard1.recipeText!}
                    likes={recipesTextCard1.likes}
                    saved={recipesTextCard1.saved}
                />
            </GridItem>

            <GridItem colSpan={1} minW={0}>
                <RecipeTextCard
                    category={recipesTextCard2.category}
                    title={recipesTextCard2.title}
                    recipeText={recipesTextCard2.recipeText!}
                    likes={recipesTextCard2.likes}
                    saved={recipesTextCard2.saved}
                />
            </GridItem>

            <GridItem colSpan={{ base: 1, sm: 1, md: 2, xl: 1, '2xl': 2 }} minW={0} height='100%'>
                <Grid gap={3} w='100%' height='100%'>
                    {recipesSimpleCards.map(({ title, category }, index) => (
                        <SimpleRecipeCard key={index} title={title} category={category} />
                    ))}
                </Grid>
            </GridItem>
        </Grid>
    </Box>
);
