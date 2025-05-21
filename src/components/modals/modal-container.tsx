import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';

type ModalContainerProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    dataTestId?: string;
};

export const ModalContainer: React.FC<ModalContainerProps> = ({
    isOpen,
    onClose,
    dataTestId,
    children,
}) => (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent
            maxW={{ base: '19.75rem', md: '24.75rem' }}
            p={8}
            borderRadius='2xl'
            data-test-id={dataTestId}
        >
            <ModalCloseButton
                onClick={onClose}
                borderRadius='full'
                border='2px solid black'
                _hover={{ bg: 'blackAlpha.200' }}
                w='1.5rem'
                h='1.5rem'
                display='flex'
                alignItems='center'
                justifyContent='center'
                top={6}
                right={6}
                data-test-id='close-button'
            />
            {children}
        </ModalContent>
    </Modal>
);
