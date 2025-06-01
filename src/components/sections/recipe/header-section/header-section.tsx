import { Box, Flex, Image } from '@chakra-ui/react';

import { RecipeInfo } from './recipe-info';

type HeaderSectionProps = {
    recipeId: string;
    title: string;
    image: string;
    categoriesIds: string[];
    description: string;
    time: number;
    likes?: number;
    isAuthor?: boolean;
    bookmarks?: number;
};

export const HeaderSection: React.FC<HeaderSectionProps> = ({
    recipeId,
    title,
    image,
    categoriesIds,
    description,
    time,
    likes,
    isAuthor,
    bookmarks,
}) => (
    <Flex
        as='section'
        direction={{ base: 'column', sm: 'row', md: 'column', lg: 'row' }}
        mt={{ base: 4, lg: 14 }}
        gap={{ base: 4, lg: 6 }}
        width='100%'
    >
        <Box flex={{ base: 1, sm: 1, lg: 5 }} borderRadius='lg' overflow='hidden'>
            <Image
                src={image}
                alt={title}
                objectFit='cover'
                w='100%'
                h={{ base: '14rem', lg: '25.625rem' }}
            />
        </Box>
        <Box flex={{ base: 1, sm: 2, lg: 7 }}>
            <RecipeInfo
                recipeId={recipeId}
                title={title}
                categoriesIds={categoriesIds}
                description={description}
                time={time}
                likes={likes}
                bookmarks={bookmarks}
                isAuthor={isAuthor}
            />
        </Box>
    </Flex>
);
