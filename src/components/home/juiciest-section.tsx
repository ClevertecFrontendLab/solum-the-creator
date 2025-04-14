import { Box, Heading, VStack } from '@chakra-ui/react';

import { recipes } from '~/constants/recipes';

import { RecipeCardHorizontal } from '../shared/cards/recipe-card/recipe-card-horizontal';

export const JuiciestSection = () => (
    <Box as='section' pt={{ base: 4, md: 8 }} pb={{ base: 8, md: 14 }} width='100%'>
        <Heading
            mb={{ base: 3, md: 6 }}
            fontSize={{ base: '2xl', lg: '4xl', '2xl': '5xl' }}
            fontWeight='500'
        >
            Самое сочное
        </Heading>

        <VStack align='center' spacing={4} width='100%'>
            {recipes.slice(0, 4).map((recipe, index) => (
                <RecipeCardHorizontal key={index} {...recipe} />
            ))}
        </VStack>
    </Box>
);
