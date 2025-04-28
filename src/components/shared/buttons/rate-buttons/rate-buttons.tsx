import { HStack } from '@chakra-ui/react';

import SavedIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import EmojiHeartIcon from '~/assets/icons/emoji-heart-icon.svg?react';
import { StatButton } from '~/components/shared/buttons/stat-button';

type RateButtonsProps = {
    bookmarks?: number;
    likes?: number;
    size?: 'xs' | 'sm';
};

export const RateButtons: React.FC<RateButtonsProps> = ({ bookmarks, likes, size }) => (
    <HStack spacing={2}>
        {bookmarks && <StatButton icon={SavedIcon} count={bookmarks} size={size} />}
        {likes && <StatButton icon={EmojiHeartIcon} count={likes} size={size} />}
    </HStack>
);
