import { Flex } from '@chakra-ui/react';

import BookmarkIcon from '~/assets/icons/bookmarkHeart-icon.svg?react';
import EmojiHeartIcon from '~/assets/icons/emoji-heart-icon.svg?react';
import PeopleIcon from '~/assets/icons/people-icon.svg?react';

import { ProfileNotificationItem } from './profile-notification-item/profile-notification-item';

type ProfileNotificationProps = {
    direction?: 'row' | 'column';
    size?: 'xs' | 'md';
};

export const ProfileNotification: React.FC<ProfileNotificationProps> = ({
    direction = 'row',
    size = 'xs',
}) => (
    <Flex direction={direction} gap={size === 'xs' ? 0.5 : 6}>
        <ProfileNotificationItem icon={BookmarkIcon} label='185' size={size} />
        <ProfileNotificationItem icon={PeopleIcon} label='589' size={size} />
        <ProfileNotificationItem icon={EmojiHeartIcon} label='587' size={size} />
    </Flex>
);
