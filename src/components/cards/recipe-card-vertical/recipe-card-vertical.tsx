import { Card, CardBody, CardFooter, Heading, Hide, Text, VStack } from '@chakra-ui/react';

import { CategoryBadge } from '~/components/shared/badges/category-badge/category-badge';
import { RateButtons } from '~/components/shared/buttons/rate-buttons/rate-buttons';
import { useNavigationToRecipe } from '~/hooks/use-navigation-to-recipe';
import { selectParentCategoriesBySubIds } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

import { ImageSection } from './image-section';

type RecipeCardVerticalProps = {
    id: string;
    title: string;
    image: string;
    categoriesIds: string[];
    description: string;
    likes?: number;
    bookmarks?: number;
    forceFromRecipe?: boolean;
};

export const RecipeCardVertical: React.FC<RecipeCardVerticalProps> = ({
    id,
    image,
    title,
    description,
    categoriesIds,
    forceFromRecipe,
    likes = 0,
    bookmarks = 0,
}) => {
    const categories = useAppSelector(selectParentCategoriesBySubIds(categoriesIds));

    const navigateToRecipe = useNavigationToRecipe({
        recipeId: id,
        subCategoryId: categoriesIds[0],
        forceFromRecipe,
    });

    return (
        <Card
            w='100%'
            overflow='hidden'
            borderRadius='lg'
            variant='outline'
            position='relative'
            minH='13.75rem'
            cursor='pointer'
            onClick={navigateToRecipe}
            height='100%'
        >
            <ImageSection image={image} categories={categories} />

            <CardBody pt={{ base: 2, sm: 3, '2xl': 4 }} pb={0} px={{ base: 2, sm: 3, '2xl': 6 }}>
                <VStack spacing={2} align='start' maxH={{ base: '3rem', md: '6.25rem' }} flex={0}>
                    <Heading
                        as='h3'
                        fontSize={{ base: 'md', md: 'lg' }}
                        fontWeight='500'
                        noOfLines={{ base: 2, md: 1 }}
                    >
                        {title}
                    </Heading>

                    <Text fontSize='sm' noOfLines={3} display={{ base: 'none', md: '-webkit-box' }}>
                        {description}
                    </Text>
                </VStack>
            </CardBody>

            <CardFooter
                pt={{ base: 2, md: 6 }}
                pb={{ base: 1, md: 3, '2xl': 5 }}
                px={{ base: 2, md: 3, '2xl': 6 }}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                flexWrap='wrap'
            >
                <Hide below='md'>
                    <VStack>
                        {categories.map((category) => (
                            <CategoryBadge
                                key={category._id}
                                title={category.title}
                                category={category.category}
                            />
                        ))}
                    </VStack>
                </Hide>

                <RateButtons bookmarks={bookmarks} likes={likes} />
            </CardFooter>
        </Card>
    );
};
