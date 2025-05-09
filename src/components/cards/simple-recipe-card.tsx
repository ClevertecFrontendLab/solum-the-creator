import { Button, Card, CardBody, Flex, Heading } from '@chakra-ui/react';

import { CategoryIcon } from '~/components/shared/category-icon/category-icon';
import { useNavigationToRecipe } from '~/hooks/use-navigation-to-recipe';
import { selectCategoryBySubCategoryId } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

type SimpleRecipeCardProps = {
    id: string;
    categoriesIds: string[];
    title: string;
};

export const SimpleRecipeCard: React.FC<SimpleRecipeCardProps> = ({ id, categoriesIds, title }) => {
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
            px={{ base: 3, md: 6 }}
            py={{ base: 2.5, md: 3 }}
            w='100%'
            minH='3.25rem'
            display='flex'
            justifyContent='center'
        >
            <CardBody p={0} display='flex' alignItems='center'>
                <Flex align='center' justify='space-between' w='100%' gap={2}>
                    <Flex align='center' gap={{ base: 2, md: 3 }} overflow='hidden'>
                        {category && <CategoryIcon category={category.category} boxSize={6} />}

                        <Heading
                            as='h3'
                            fontSize={{ base: 'md', md: 'lg', '2xl': 'xl' }}
                            fontWeight='500'
                            noOfLines={1}
                            wordBreak='break-all'
                        >
                            {title}
                        </Heading>
                    </Flex>

                    <Button
                        size={{ base: 'xs', '2xl': 'sm' }}
                        variant='outline'
                        onClick={navigateToRecipe}
                        flexShrink={0}
                        colorScheme='lime'
                    >
                        Готовить
                    </Button>
                </Flex>
            </CardBody>
        </Card>
    );
};
