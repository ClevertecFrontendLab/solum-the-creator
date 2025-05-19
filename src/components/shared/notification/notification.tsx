import { VStack } from '@chakra-ui/react';
import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { selectAllNotifications } from '~/store/notification/selectors';
import { removeNotification } from '~/store/notification/slice';

import { NotificationItem } from './notification-item';

export const Notification: React.FC = () => {
    const notifications = useAppSelector(selectAllNotifications);
    const dispatch = useAppDispatch();

    const handleClose = useCallback(
        (id: string) => {
            dispatch(removeNotification(id));
        },
        [dispatch],
    );

    return (
        <VStack
            position='fixed'
            left='50%'
            transform='translateX(-50%)'
            bottom={{ base: '6.25rem', md: '5rem' }}
            spacing={3}
            zIndex='toast'
        >
            {notifications.map(({ id, title, description, type }) => (
                <NotificationItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    onClose={handleClose}
                    type={type}
                />
            ))}
        </VStack>
    );
};
