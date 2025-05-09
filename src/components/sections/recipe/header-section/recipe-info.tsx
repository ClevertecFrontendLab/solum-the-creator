import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';

import { CategoryBadge } from '~/components/shared/badges/category-badge/category-badge';
import { TimeBadge } from '~/components/shared/badges/time-badge/time-badge';
import { RateButtons } from '~/components/shared/buttons/rate-buttons/rate-buttons';
import { selectParentCategoriesBySubIds } from '~/store/category/selectors';
import { useAppSelector } from '~/store/hooks';

import { ActionButtons } from './action-buttons';

type RecipeInfoProps = {
    title: string;
    categoriesIds: string[];
    description: string;
    time: number;
    likes?: number;
    bookmarks?: number;
};

export const RecipeInfo: React.FC<RecipeInfoProps> = ({
    title,
    categoriesIds,
    description,
    time,
    likes,
    bookmarks,
}) => {
    const categories = useAppSelector(selectParentCategoriesBySubIds(categoriesIds));

    return (
        <VStack w='100%' justify='space-between' h='100%' spacing={6}>
            <Box w='100%'>
                <HStack justify='space-between' w='100%' align='flex-start' mb={8}>
                    <Flex gap={2} flexWrap='wrap'>
                        {categories.map(({ _id, category, title }) => (
                            <CategoryBadge
                                key={_id}
                                title={title}
                                category={category}
                                bgColor='lime.50'
                            />
                        ))}
                    </Flex>
                    <RateButtons bookmarks={bookmarks} likes={likes} size='sm' />
                </HStack>

                <VStack align='start' w='100%' spacing={{ base: 4, md: 6 }}>
                    <Heading as='h1' size={{ base: 'lg', md: '2xl' }} maxW='27rem'>
                        {title}
                    </Heading>
                    <Text fontSize='sm' maxW='33rem'>
                        {description}
                    </Text>
                </VStack>
            </Box>

            <HStack justify='space-between' w='100%' align='flex-end' flexWrap='wrap' gap={3}>
                <TimeBadge label={time.toString()} />
                <ActionButtons />
            </HStack>
        </VStack>
    );
};
