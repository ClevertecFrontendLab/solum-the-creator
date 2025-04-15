import {
    Box,
    Button,
    Card,
    CardFooter,
    Flex,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    Text,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';

import SavedIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import EmojiHeartIcon from '~/assets/icons/emoji-heart-icon.svg?react';
import { CategoryKey } from '~/constants/category-icons';

import { StatButton } from '../../buttons/stat-button';
import { CategoryBadge } from '../../category-badge/category-badge';
import { RecommendBadge } from '../../recommend-badge/recommend-badge';

type RecipeCardHorizontalProps = {
    image: string;
    title: string;
    description?: string;
    category?: CategoryKey;
    likes?: number;
    saved?: number;
    reccomendedBy?: {
        avatarUrl: string;
        fullName: string;
    };
};

export const RecipeCardHorizontal: React.FC<RecipeCardHorizontalProps> = ({
    image,
    title,
    description,
    category,
    reccomendedBy,
    likes = 0,
    saved = 0,
}) => {
    const smallerThanLg = useBreakpointValue({ base: true, lg: false });

    return (
        <Card w='100%' borderRadius='lg' variant='outline' minH='8rem'>
            <Flex direction='row' height='100%'>
                <Box
                    position='relative'
                    w='100%'
                    maxW={{ base: '10rem', lg: '21.625rem' }}
                    minW={{ base: '9.875rem', lg: '14.375rem' }}
                >
                    <Image src={image} alt={title} w='100%' h='100%' objectFit='cover' />

                    {category && (
                        <Box
                            position='absolute'
                            top={2}
                            left={2}
                            zIndex={1}
                            display={{ base: 'inline-flex', lg: 'none' }}
                        >
                            <CategoryBadge category={category} bgColor='lime.50' />
                        </Box>
                    )}

                    {reccomendedBy && (
                        <Box
                            position='absolute'
                            bottom={5}
                            left={6}
                            zIndex={1}
                            display={{ base: 'none', lg: 'inline-flex' }}
                        >
                            <RecommendBadge
                                avatarUrl={reccomendedBy.avatarUrl}
                                fullName={reccomendedBy.fullName}
                            />
                        </Box>
                    )}
                </Box>

                <Flex
                    direction='column'
                    justify='space-between'
                    flex='1'
                    px={{ base: 2, lg: 6 }}
                    py={{ base: 2, lg: 5 }}
                    pb={{ base: 1, lg: 6 }}
                >
                    <VStack align='stretch' spacing={{ base: 0, lg: 6 }}>
                        <Flex justify='space-between' align='center' wrap='wrap' gap={2}>
                            {category && (
                                <Box display={{ base: 'none', lg: 'inline-flex' }}>
                                    <CategoryBadge category={category} bgColor='lime.50' />
                                </Box>
                            )}

                            <HStack spacing={2}>
                                <StatButton icon={SavedIcon} count={saved} />
                                <StatButton icon={EmojiHeartIcon} count={likes} />
                            </HStack>
                        </Flex>

                        <VStack spacing={2} align='stretch'>
                            <Heading
                                as='h3'
                                fontSize={{ base: 'md', lg: 'xl' }}
                                fontWeight='500'
                                noOfLines={{ base: 2, lg: 1 }}
                            >
                                {title}
                            </Heading>

                            {description && (
                                <Text
                                    fontSize='sm'
                                    noOfLines={3}
                                    display={{ base: 'none', lg: '-webkit-box' }}
                                >
                                    {description}
                                </Text>
                            )}
                        </VStack>
                    </VStack>

                    <CardFooter px={0} pt={{ base: 5, lg: 6 }} pb={0}>
                        <HStack spacing={{ base: 3, lg: 2 }} justify='flex-end' w='100%'>
                            {smallerThanLg ? (
                                <IconButton
                                    size='xs'
                                    icon={<Icon as={SavedIcon} />}
                                    variant='outline'
                                    colorScheme='black'
                                    aria-label='Сохранить'
                                />
                            ) : (
                                <Button
                                    leftIcon={<Icon as={SavedIcon} />}
                                    size='sm'
                                    variant='outline'
                                    colorScheme='black'
                                    color='blackAlpha.800'
                                >
                                    Сохранить
                                </Button>
                            )}

                            <Button size={{ base: 'xs', lg: 'sm' }} variant='black'>
                                Готовить
                            </Button>
                        </HStack>
                    </CardFooter>
                </Flex>
            </Flex>
        </Card>
    );
};
