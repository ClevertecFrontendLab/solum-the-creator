import { Flex, HStack } from '@chakra-ui/react';

import recipeImg from '~/assets/recipes/recipe-1.jpg';
import { RecipeCardVertical } from '~/components/shared/cards/recipe-card/recipe-card-vertical';
import { HeroSection } from '~/components/shared/hero-section/hero-section';

export const HomePage = () => (
    <Flex direction='column' align='center' h={6}>
        <HeroSection title='Приятного аппетита!' />

        <HStack spacing={4}>
            <RecipeCardVertical
                title='Картофель по-пекински с овощами и сыром'
                image={recipeImg}
                category='medical'
                description='Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
                likes={2}
                saved={3}
            />

            <RecipeCardVertical
                title='Картофель по-пекински'
                image={recipeImg}
                category='preserves'
                description='Картофель по-пекински с овощами и сыром'
                likes={2}
                saved={3}
            />
        </HStack>
    </Flex>
);
