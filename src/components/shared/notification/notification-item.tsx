import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
import { useEffect } from 'react';

type NotificationItemProps = {
    id: string;
    title?: string;
    description?: string;
    onClose: (id: string) => void;
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
    id,
    title,
    description,
    onClose,
}) => {
    const closeTimeout = 15000;

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(id);
        }, closeTimeout);

        return () => clearTimeout(timer);
    }, [id, onClose]);

    return (
        <Alert
            status='error'
            w={{ base: '20.5rem', md: '25rem' }}
            variant='solid'
            bgColor='red.500'
            data-test-id='error-notification'
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
