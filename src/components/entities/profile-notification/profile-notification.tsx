import { Flex } from '@chakra-ui/react';

import BookmarkIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import EmojiHeartIcon from '~/assets/icons/emoji-heart-icon.svg?react';
import PeopleIcon from '~/assets/icons/people-icon.svg?react';

import { ProfileNotificationItem } from './profile-notification-item/profile-notification-item';

type ProfileNotificationProps = {
    direction?: 'row' | 'column';
    size?: 'xs' | 'md';
    values: [number, number, number];
};

const GAP_BY_SIZE: Record<NonNullable<ProfileNotificationProps['size']>, number> = {
    xs: 0.5,
    md: 6,
};

export const ProfileNotification: React.FC<ProfileNotificationProps> = ({
    direction = 'row',
    size = 'xs',
    values,
}) => {
    const [favorites, followers, likes] = values;
    return (
        <Flex direction={direction} gap={GAP_BY_SIZE[size]}>
            <ProfileNotificationItem icon={BookmarkIcon} label={favorites} size={size} />
            <ProfileNotificationItem icon={PeopleIcon} label={followers} size={size} />
            <ProfileNotificationItem icon={EmojiHeartIcon} label={likes} size={size} />
        </Flex>
    );
};
