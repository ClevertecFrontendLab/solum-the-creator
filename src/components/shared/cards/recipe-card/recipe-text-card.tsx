import { Card, CardBody, CardFooter, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';

import SavedIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import EmojiHeartIcon from '~/assets/icons/emoji-heart-icon.svg?react';
import { StatButton } from '~/components/ui/buttons/shared/stat-button';
import { CategoryBadge } from '~/components/widgets/category-badge/category-badge';
import { CategoryKey } from '~/constants/ui/category-icons';

type RecipeTextCardProps = {
    title: string;
    recipeText: string;
    category: CategoryKey;
    likes?: number;
    saved?: number;
};

export const RecipeTextCard: React.FC<RecipeTextCardProps> = ({
    title,
    recipeText,
    category,
    likes = 0,
    saved = 0,
}) => (
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
                    {recipeText}
                </Text>
            </VStack>
        </CardBody>

        <CardFooter p={0}>
            <Flex justify='space-between' align='center' w='100%' gap={1}>
                <CategoryBadge category={category} bgColor='lime.50' />

                <HStack spacing={2}>
                    <StatButton icon={SavedIcon} count={saved} />
                    <StatButton icon={EmojiHeartIcon} count={likes} />
                </HStack>
            </Flex>
        </CardFooter>
    </Card>
);
