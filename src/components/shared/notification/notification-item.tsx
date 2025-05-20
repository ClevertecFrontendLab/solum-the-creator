import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
import { useEffect } from 'react';

export type NotificationPosition = 'bottom-left' | 'bottom-center';

export type NotificationItemProps = {
    id: string;
    title?: string;
    description?: string;
    type?: 'success' | 'error';
    position?: NotificationPosition;
    onClose: (id: string) => void;
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
    id,
    title,
    description,
    type = 'error',
    onClose,
}) => {
    const closeTimeout = 15000;

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(id);
        }, closeTimeout);

        return () => clearTimeout(timer);
    }, [id, onClose]);

    const dataTestId = type === 'success' ? 'success-notification' : 'error-notification';

    return (
        <Alert
            status={type}
            w={{ base: '20.5rem', md: '25rem' }}
            variant='solid'
            bgColor={type === 'success' ? 'green.500' : 'red.500'}
            data-test-id={dataTestId}
            position='relative'
        >
            <AlertIcon />
            <Box>
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{description}</AlertDescription>
            </Box>
            <CloseButton
                onClick={() => onClose(id)}
                position='absolute'
                alignSelf='flex-start'
                right={0}
                top={0}
                data-test-id='close-alert-button'
            />
        </Alert>
    );
};
