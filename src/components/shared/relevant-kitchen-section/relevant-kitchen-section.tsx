import { Box, Heading, HStack, VStack } from '@chakra-ui/react';

import { recipes } from '~/constants/recipes';

import { RecipeTextCard } from '../cards/recipe-card/recipe-text-card';
import { SimpleRecipeCard } from '../cards/recipe-card/simple-recipe-card';

export const RelevantKitchenSection = () => (
    <Box as='section' pt={{ base: 4, md: 8 }} pb={{ base: 8, md: 14 }} width='100%'>
        <Heading fontSize={{ base: '2xl', lg: '4xl', '2xl': '5xl' }} fontWeight='500'>
            Веганская кухня
        </Heading>

        <HStack
            justify='space-between'
            align='center'
            width='50%'
            pt={{ base: 3, md: 4, '2xl': 6 }}
        >
            <RecipeTextCard
                title={recipes[0].title}
                recipeText={recipes[0].recipeText!}
                category={recipes[0].category}
                likes={recipes[0].likes}
                saved={recipes[0].saved}
            />

            <RecipeTextCard
                title={recipes[0].title}
                recipeText={recipes[0].recipeText!}
                category={recipes[0].category}
                likes={recipes[0].likes}
                saved={recipes[0].saved}
            />
        </HStack>
        <VStack
            align='center'
            spacing={{ base: 3, md: 4, '2xl': 6 }}
            pt={{ base: 3, md: 4, '2xl': 6 }}
        >
            {recipes.slice(1, 4).map(({ category, title }, index) => (
                <SimpleRecipeCard key={index} category={category} title={title} />
            ))}
        </VStack>
    </Box>
);
