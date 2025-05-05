import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    CloseButton,
    VStack,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { selectAllNotifications } from '~/store/notification/selectors';
import { removeNotification } from '~/store/notification/slice';

export const Notification: React.FC = () => {
    const notifications = useAppSelector(selectAllNotifications);
    const dispatch = useAppDispatch();

    return (
        <VStack
            position='fixed'
            left='50%'
            transform='translateX(-50%)'
            bottom={{ base: '6.25rem', md: '5rem' }}
            spacing={3}
            zIndex={8}
        >
            {notifications.map((notif) => (
                <Alert
                    key={notif.id}
                    status='error'
                    w={{ base: '20.5rem', md: '25rem' }}
                    variant='solid'
                    bgColor='red.500'
                >
                    <AlertIcon />
                    <Box>
                        <AlertTitle>{notif.title}</AlertTitle>
                        <AlertDescription>{notif.description}</AlertDescription>
                    </Box>
                    <CloseButton
                        onClick={() => dispatch(removeNotification(notif.id))}
                        position='absolute'
                        alignSelf='flex-start'
                        right={0}
                        top={0}
                    />
                </Alert>
            ))}
        </VStack>
    );
};
