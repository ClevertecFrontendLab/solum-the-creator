import { Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';

import { RecipeCardHorizontal } from '~/components/shared/cards/recipe-card/recipe-card-horizontal';
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
            <Heading fontSize={{ base: '2xl', lg: '4xl', '2xl': '5xl' }} fontWeight='500'>
                Самое сочное
            </Heading>
            <JuiciestButton
                display={{ base: 'none', lg: 'inline-flex' }}
                data-test-id='juiciest-link'
            />
        </HStack>

        <SimpleGrid
            spacing={{ base: 3, sm: 4, '2xl': 6 }}
            width='100%'
            columns={{ base: 1, sm: 2, md: 1, '2xl': 2 }}
        >
            {recipes.slice(0, 4).map((recipe, index) => (
                <RecipeCardHorizontal key={index} {...recipe} />
            ))}
        </SimpleGrid>

        <JuiciestButton
            display={{ base: 'inline-flex', lg: 'none' }}
            data-test-id='juiciest-link-mobile'
        />
    </VStack>
);
