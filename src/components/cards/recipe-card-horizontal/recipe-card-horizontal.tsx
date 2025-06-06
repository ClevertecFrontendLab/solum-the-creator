import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Highlight,
    HStack,
    Icon,
    IconButton,
    Text,
    VStack,
} from '@chakra-ui/react';

import SavedIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import { useNavigationToRecipe } from '~/hooks/use-navigation-to-recipe';
import { useRecipeBookmark } from '~/hooks/use-recipe-bookmark';
import { selectParentCategoriesBySubIds } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';
import { selectSearchStringFilter } from '~/store/recipes-filters/selectors';

import { ImageSection } from './image-section';
import { TopRow } from './top-row';

type RecipeCardHorizontalProps = {
    id: string;
    image: string;
    title: string;
    description: string;
    categoriesIds: string[];
    likes?: number;
    dataTestId?: string;
    index?: number;
    bookmarks?: number;
    recommendedBy?: {
        avatarUrl: string;
        fullName: string;
    };
};

export const RecipeCardHorizontal: React.FC<RecipeCardHorizontalProps> = ({
    id,
    title,
    image,
    description,
    categoriesIds,
    recommendedBy,
    dataTestId,
    index,
    likes = 0,
    bookmarks = 0,
}) => {
    const categories = useAppSelector(selectParentCategoriesBySubIds(categoriesIds));

    const handleCookClick = useNavigationToRecipe({
        recipeId: id,
        subCategoryId: categoriesIds[0],
    });
    const { handleToggleBookmark, isLoading } = useRecipeBookmark(id);

    const searchQuery = useAppSelector(selectSearchStringFilter);

    return (
        <Card
            w='100%'
            borderRadius='lg'
            variant='outline'
            minH={{ base: '8rem', lg: '15.25rem' }}
            data-test-id={dataTestId}
        >
            <Flex direction='row' h='100%' align='stretch'>
                <ImageSection image={image} categories={categories} recommendedBy={recommendedBy} />

                <Flex
                    direction='column'
                    justify='space-between'
                    flex='1'
                    px={{ base: 2, lg: 6 }}
                    py={{ base: 2, lg: 5 }}
                    pb={{ base: 1, lg: 6 }}
                >
                    <CardBody
                        as={VStack}
                        align='stretch'
                        spacing={{ base: 0, lg: 6 }}
                        px={0}
                        py={0}
                    >
                        <TopRow categories={categories} likes={likes} bookmarks={bookmarks} />

                        <VStack spacing={2} align='stretch' maxH={{ base: 'none', lg: '6.25rem' }}>
                            <Heading
                                as='h3'
                                fontSize={{ base: 'md', lg: 'xl' }}
                                fontWeight='500'
                                noOfLines={{ base: 2, lg: 1 }}
                                wordBreak='break-all'
                            >
                                <Highlight query={searchQuery} styles={{ color: 'lime.600' }}>
                                    {title}
                                </Highlight>
                            </Heading>

                            <Text
                                fontSize='sm'
                                noOfLines={3}
                                display={{ base: 'none', lg: '-webkit-box' }}
                            >
                                {description}
                            </Text>
                        </VStack>
                    </CardBody>

                    <CardFooter px={0} pt={{ base: 5, lg: 6 }} pb={0}>
                        <HStack spacing={{ base: 3, lg: 2 }} justify='flex-end' w='100%'>
                            <IconButton
                                size='xs'
                                icon={<Icon as={SavedIcon} />}
                                variant='outline'
                                colorScheme='black'
                                aria-label='Сохранить'
                                display={{ base: 'block', lg: 'none' }}
                                isLoading={isLoading}
                                onClick={handleToggleBookmark}
                            />

                            <Button
                                leftIcon={<Icon as={SavedIcon} />}
                                size='sm'
                                variant='outline'
                                colorScheme='black'
                                color='blackAlpha.800'
                                display={{ base: 'none', lg: 'flex' }}
                                onClick={handleToggleBookmark}
                                isLoading={isLoading}
                            >
                                Сохранить
                            </Button>

                            <Button
                                size={{ base: 'xs', lg: 'sm' }}
                                variant='black'
                                onClick={handleCookClick}
                                data-test-id={`card-link-${index}`}
                            >
                                Готовить
                            </Button>
                        </HStack>
                    </CardFooter>
                </Flex>
            </Flex>
        </Card>
    );
};
