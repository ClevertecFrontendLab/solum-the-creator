import { Flex, Hide } from '@chakra-ui/react';

import { CategoryBadge } from '~/components/shared/badges/category-badge/category-badge';
import { RateButtons } from '~/components/shared/buttons/rate-buttons/rate-buttons';
import { CategoryKey } from '~/constants/ui/category-icons';

type TopRowProps = {
    category?: CategoryKey;
    likes: number;
    bookmarks: number;
};

export const TopRow: React.FC<TopRowProps> = ({ category, likes, bookmarks }) => (
    <Flex justify='space-between' align='center' wrap='wrap' gap={2}>
        {category && (
            <Hide below='lg'>
                <CategoryBadge category={category} bgColor='lime.50' />
            </Hide>
        )}

        <RateButtons bookmarks={bookmarks} likes={likes} />
    </Flex>
);
