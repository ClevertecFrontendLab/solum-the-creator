import { Card, CardBody, CardFooter, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import { CategoryBadge } from '~/components/shared/badges/category-badge/category-badge';
import { RateButtons } from '~/components/shared/buttons/rate-buttons/rate-buttons';
import { useNavigationToRecipe } from '~/hooks/use-navigation-to-recipe';
import { selectCategoryBySubCategoryId } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

type RecipeTextCardProps = {
    id: string;
    title: string;
    description: string;
    categoriesIds: string[];
    likes?: number;
    bookmarks?: number;
};

export const RecipeTextCard: React.FC<RecipeTextCardProps> = ({
    id,
    title,
    description,
    categoriesIds,
    likes = 0,
    bookmarks = 0,
}) => {
    const category = useAppSelector(selectCategoryBySubCategoryId(categoriesIds[0]));

    const navigateToRecipe = useNavigationToRecipe({
        recipeId: id,
        subCategoryId: categoriesIds[0],
        forceFromRecipe: true,
    });

    return (
        <Card
            borderRadius='lg'
            variant='outline'
            w='100%'
            px={{ base: 3, lg: 4, '2xl': 6 }}
            py={{ base: 3, lg: 4, '2xl': 6 }}
            pb={{ base: 3, lg: 4, '2xl': 5 }}
            display='flex'
            flexDir='column'
            gap={6}
            onClick={navigateToRecipe}
            cursor='pointer'
        >
            <CardBody p={0}>
                <VStack align='start' spacing={2}>
                    <Heading
                        as='h3'
                        fontSize={{ base: 'md', lg: 'xl' }}
                        fontWeight='500'
                        lineHeight={1.4}
                        noOfLines={1}
                        wordBreak='break-all'
                    >
                        {title}
                    </Heading>
                    <Text fontSize='sm' noOfLines={3}>
                        {description}
                    </Text>
                </VStack>
            </CardBody>

            <CardFooter p={0}>
                <Flex justify='space-between' align='center' w='100%' gap={1}>
                    {category && (
                        <CategoryBadge
                            title={category.title}
                            category={category.category}
                            bgColor='lime.50'
                        />
                    )}

                    <RateButtons bookmarks={bookmarks} likes={likes} />
                </Flex>
            </CardFooter>
        </Card>
    );
};
