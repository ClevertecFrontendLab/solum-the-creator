import { Flex, Hide, HStack } from '@chakra-ui/react';

import SavedIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import EmojiHeartIcon from '~/assets/icons/emoji-heart-icon.svg?react';
import { StatButton } from '~/components/ui/buttons/shared/stat-button';
import { CategoryBadge } from '~/components/widgets/category-badge/category-badge';
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

        <HStack spacing={2}>
            <StatButton icon={SavedIcon} count={bookmarks} />
            <StatButton icon={EmojiHeartIcon} count={likes} />
        </HStack>
    </Flex>
);
