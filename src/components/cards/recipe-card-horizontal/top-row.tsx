import { Flex, Hide, VStack } from '@chakra-ui/react';

import { CategoryBadge } from '~/components/shared/badges/category-badge/category-badge';
import { RateButtons } from '~/components/shared/buttons/rate-buttons/rate-buttons';
import { Category } from '~/types/category';

type TopRowProps = {
    categories: Category[];
    likes: number;
    bookmarks: number;
};

export const TopRow: React.FC<TopRowProps> = ({ categories, likes, bookmarks }) => (
    <Flex justify='space-between' align='start' wrap='wrap' gap={2}>
        <Hide below='lg'>
            <VStack align='start'>
                {categories.map((category) => (
                    <CategoryBadge
                        key={category._id}
                        category={category.category}
                        title={category.title}
                        bgColor='lime.50'
                    />
                ))}
            </VStack>
        </Hide>

        <RateButtons bookmarks={bookmarks} likes={likes} />
    </Flex>
);
