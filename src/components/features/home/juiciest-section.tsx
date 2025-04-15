import { Heading, Hide, HStack, Show, SimpleGrid, VStack } from '@chakra-ui/react';

import { RecipeCardHorizontal } from '~/components/shared/cards/recipe-card/recipe-card-horizontal/recipe-card-horizontal';
import { JuiciestButton } from '~/components/ui/buttons/shared/juiciest-button';
import { recipes } from '~/constants/data/recipes';

export const JuiciestSection = () => (
    <VStack
        as='section'
        pt={{ base: 6, md: 8 }}
        pb={{ base: 8, md: 10 }}
        spacing={{ base: 3, lg: 4, '2xl': 6 }}
        width='100%'
    >
        <HStack justify='space-between' align='center' width='100%'>
            <Heading variant='section-title'>Самое сочное</Heading>
            <Hide below='lg'>
                <JuiciestButton data-test-id='juiciest-link' />
            </Hide>
        </HStack>

        <SimpleGrid
            width='100%'
            spacing={{ base: 3, sm: 4, '2xl': 6 }}
            columns={{ base: 1, sm: 2, md: 1, '2xl': 2 }}
        >
            {recipes.slice(0, 4).map((recipe) => (
                <RecipeCardHorizontal key={recipe.id} {...recipe} />
            ))}
        </SimpleGrid>

        <Show below='lg'>
            <JuiciestButton data-test-id='juiciest-link-mobile' />
        </Show>
    </VStack>
);
