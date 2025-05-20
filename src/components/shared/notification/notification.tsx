import { StackProps, VStack } from '@chakra-ui/react';
import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { selectAllNotifications } from '~/store/notification/selectors';
import { removeNotification } from '~/store/notification/slice';

import { NotificationItem, NotificationItemProps, NotificationPosition } from './notification-item';

const positionStyles: Record<NotificationPosition, StackProps> = {
    'bottom-center': {
        left: '50%',
        transform: 'translateX(-50%)',
        align: 'center',
    },
    'bottom-left': {
        left: { base: '50%', md: '25%' },
        transform: { base: 'translateX(-50%)' },
        align: 'center',
    },
};

export const Notification: React.FC = () => {
    const notifications = useAppSelector(selectAllNotifications);
    const dispatch = useAppDispatch();

    const handleClose = useCallback(
        (id: string) => {
            dispatch(removeNotification(id));
        },
        [dispatch],
    );

    const grouped = notifications.reduce<Record<NotificationPosition, NotificationItemProps[]>>(
        (acc, n) => {
            const position = n.position ?? 'bottom-center';
            if (!acc[position]) acc[position] = [];
            acc[position].push({ ...n, onClose: handleClose });
            return acc;
        },
        {
            'bottom-center': [],
            'bottom-left': [],
        },
    );

    return (
        <>
            {(Object.keys(grouped) as NotificationPosition[]).map((position) =>
                grouped[position].length > 0 ? (
                    <VStack
                        key={position}
                        position='fixed'
                        bottom={{ base: '6.25rem', md: '5rem' }}
                        spacing={3}
                        zIndex='toast'
                        {...positionStyles[position]}
                    >
                        {grouped[position].map((props) => (
                            <NotificationItem key={props.id} {...props} />
                        ))}
                    </VStack>
                ) : null,
            )}
        </>
    );
};
