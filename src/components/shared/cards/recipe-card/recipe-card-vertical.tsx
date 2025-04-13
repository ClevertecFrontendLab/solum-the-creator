import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';

import SavedIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import EmojiHeartIcon from '~/assets/icons/emoji-heart-icon.svg?react';
import { CategoryKey } from '~/constants/category-icons';

import { StatButton } from '../../buttons/stat-button';
import { CategoryBadge } from '../../category-badge/category-badge';

type RecipeCardVerticalProps = {
    image: string;
    title: string;
    description?: string;
    category?: CategoryKey;
    likes?: number;
    saved?: number;
};

export const RecipeCardVertical: React.FC<RecipeCardVerticalProps> = ({
    image,
    title,
    description,
    category,
    likes = 0,
    saved = 0,
}) => (
    <Card
        maxW='20rem'
        w='full'
        overflow='hidden'
        borderRadius='lg'
        variant='outline'
        position='relative'
    >
        <Box position='relative'>
            <Image
                src={image}
                alt={title}
                w='full'
                h={{ base: '8rem', sm: '14.375rem' }}
                objectFit='cover'
            />

            {category && (
                <Box
                    position='absolute'
                    top={2}
                    left={2}
                    zIndex={1}
                    display={{ base: 'inline-flex', sm: 'none' }}
                >
                    <CategoryBadge category={category} />
                </Box>
            )}
        </Box>

        <CardBody pt={{ base: 2, sm: 3, '2xl': 4 }} pb={0} px={{ base: 2, sm: 3, '2xl': 6 }}>
            <VStack spacing={2} align='start'>
                <Heading
                    as='h3'
                    fontSize={{ base: 'md', sm: 'lg' }}
                    fontWeight='500'
                    noOfLines={{ base: 2, sm: 1 }}
                >
                    {title}
                </Heading>

                {description && (
                    <Text
                        fontSize='sm'
                        noOfLines={3}
                        h='4rem'
                        display={{ base: 'none', sm: '-webkit-box' }}
                    >
                        {description}
                    </Text>
                )}
            </VStack>
        </CardBody>

        <CardFooter
            pt={{ base: 2, sm: 6 }}
            pb={{ base: 1, sm: 3, '2xl': 5 }}
            px={{ base: 2, sm: 3, '2xl': 6 }}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            flexWrap='wrap'
        >
            {category && (
                <Box display={{ base: 'none', sm: 'inline-flex' }}>
                    <CategoryBadge category={category} />
                </Box>
            )}

            <HStack spacing={2}>
                <StatButton icon={SavedIcon} count={saved} />
                <StatButton icon={EmojiHeartIcon} count={likes} />
            </HStack>
        </CardFooter>
    </Card>
);
