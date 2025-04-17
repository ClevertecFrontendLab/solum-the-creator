import { Card, CardBody, CardFooter, Heading, Hide, HStack, Text, VStack } from '@chakra-ui/react';

import SavedIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import EmojiHeartIcon from '~/assets/icons/emoji-heart-icon.svg?react';
import { StatButton } from '~/components/ui/buttons/shared/stat-button';
import { CategoryBadge } from '~/components/widgets/category-badge/category-badge';
import { CategoryKey } from '~/constants/ui/category-icons';

import { ImageSection } from './image-section';

type RecipeCardVerticalProps = {
    title: string;
    image: string;
    description?: string;
    category?: CategoryKey;
    likes?: number;
    bookmarks?: number;
};

export const RecipeCardVertical: React.FC<RecipeCardVerticalProps> = ({
    image,
    title,
    description,
    category,
    likes = 0,
    bookmarks = 0,
}) => (
    <Card
        w='100%'
        overflow='hidden'
        borderRadius='lg'
        variant='outline'
        position='relative'
        minH='13.75rem'
    >
        <ImageSection image={image} category={category} />

        <CardBody pt={{ base: 2, sm: 3, '2xl': 4 }} pb={0} px={{ base: 2, sm: 3, '2xl': 6 }}>
            <VStack spacing={2} align='start'>
                <Heading
                    as='h3'
                    fontSize={{ base: 'md', md: 'lg' }}
                    fontWeight='500'
                    noOfLines={{ base: 2, md: 1 }}
                >
                    {title}
                </Heading>

                {description && (
                    <Text
                        fontSize='sm'
                        noOfLines={3}
                        h='4rem'
                        display={{ base: 'none', md: '-webkit-box' }}
                    >
                        {description}
                    </Text>
                )}
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
            {category && (
                <Hide below='md'>
                    <CategoryBadge category={category} />
                </Hide>
            )}

            <HStack spacing={2}>
                <StatButton icon={SavedIcon} count={bookmarks} />
                <StatButton icon={EmojiHeartIcon} count={likes} />
            </HStack>
        </CardFooter>
    </Card>
);
