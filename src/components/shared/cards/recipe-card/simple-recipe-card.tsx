import { Button, Card, CardBody, Flex, Heading } from '@chakra-ui/react';

import { CategoryKey } from '~/constants/category-icons';

import { CategoryIcon } from '../../category-icon/category-icon';

type SimpleRecipeCardProps = {
    category: CategoryKey;
    title: string;
    onCookClick?: () => void;
};

export const SimpleRecipeCard: React.FC<SimpleRecipeCardProps> = ({
    category,
    title,
    onCookClick,
}) => (
    <Card
        borderRadius='lg'
        variant='outline'
        px={{ base: 3, md: 6 }}
        py={{ base: 2.5, md: 3 }}
        w='100%'
    >
        <CardBody p={0}>
            <Flex align='center' justify='space-between' w='100%' gap={2}>
                <Flex align='center' gap={{ base: 2, md: 3 }} overflow='hidden'>
                    <CategoryIcon category={category} boxSize={6} />
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
                    onClick={onCookClick}
                    flexShrink={0}
                    colorScheme='lime'
                >
                    Готовить
                </Button>
            </Flex>
        </CardBody>
    </Card>
);
