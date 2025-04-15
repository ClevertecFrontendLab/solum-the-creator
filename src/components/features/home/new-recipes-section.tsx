import { Box, Button, Flex, Heading, Icon, useBreakpointValue } from '@chakra-ui/react';

import ArrowLeftIcon from '~/assets/icons/arrow-left-icon.svg?react';
import ArrowRightIcon from '~/assets/icons/arrow-right-icon.svg?react';
import { RecipeCardVertical } from '~/components/shared/cards/recipe-card/recipe-card-vertical';
import { recipes } from '~/constants/data/recipes';

export const NewRecipesSection = () => {
    const showControls = useBreakpointValue({ base: false, md: true });

    return (
        <Box as='section' position='relative' width='100%'>
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
                            top='40%'
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
                            top='40%'
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

                <Flex gap={{ base: 3, '2xl': 6 }} w='max-content' minW='100%'>
                    {recipes.map((recipe, idx) => (
                        <RecipeCardVertical key={idx} {...recipe} />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};
