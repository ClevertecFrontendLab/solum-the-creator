import { Box, Button, Flex, Heading, Icon, useBreakpointValue } from '@chakra-ui/react';

import ArrowLeftIcon from '~/assets/icons/arrow-left-icon.svg?react';
import ArrowRightIcon from '~/assets/icons/arrow-right-icon.svg?react';
import recipeImg1 from '~/assets/recipes/recipe-1.jpg';
import { CategoryKey } from '~/constants/category-icons';

import { RecipeCardVertical } from '../shared/cards/recipe-card/recipe-card-vertical';

type Recipe = {
    image: string;
    title: string;
    description: string;
    category: CategoryKey;
    likes?: number;
    saved?: number;
};

const recipes: Recipe[] = [
    {
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
    {
        image: recipeImg1,
        title: 'Паста с соусом',
        description: 'Очень вкусная и быстрая в приготовлении паста.',
        category: 'vegan',
        likes: 120,
        saved: 90,
    },
];

export const NewRecipesSection = () => {
    const showControls = useBreakpointValue({ base: false, md: true });

    return (
        <Box position='relative' maxW='100%'>
            <Heading
                mb={{ base: 3, md: 6 }}
                fontSize={{ base: '2xl', lg: '4xl', '2xl': '5xl' }}
                fontWeight='500'
            >
                Новые рецепты
            </Heading>

            <Box position='relative' overflowX='hidden' overflowY='hidden' pb={2}>
                {showControls && (
                    <>
                        <Button
                            position='absolute'
                            left={0}
                            top='50%'
                            transform='translateY(-50%)'
                            zIndex={1}
                            variant='black'
                            boxSize={12}
                            borderRadius='md'
                        >
                            <Icon as={ArrowLeftIcon} color='lime.50' boxSize={6} />
                        </Button>

                        <Button
                            position='absolute'
                            right={0}
                            top='50%'
                            transform='translateY(-50%)'
                            zIndex={1}
                            variant='black'
                            boxSize={12}
                            borderRadius='md'
                        >
                            <Icon as={ArrowRightIcon} color='lime.50' boxSize={6} />
                        </Button>
                    </>
                )}

                <Flex gap={{ base: 3, md: 6 }} w='max-content' minW='100%'>
                    {recipes.map((recipe, idx) => (
                        <RecipeCardVertical key={idx} {...recipe} />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};
