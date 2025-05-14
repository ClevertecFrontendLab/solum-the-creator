import { Button, Heading, Image, ModalBody, Text, VStack } from '@chakra-ui/react';

import modalImg from '~/assets/images/scatches/breakfast.png';

import { ModalContainer } from './modal-container';

type AuthErrorModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onRetry: () => void;
    title?: string;
    description?: string;
};

export const AuthErrorModal: React.FC<AuthErrorModalProps> = ({ isOpen, onClose, onRetry }) => (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
        <ModalBody p={0}>
            <VStack spacing={8}>
                <Image
                    src={modalImg}
                    alt='Breakfast'
                    w='100%'
                    h='100%'
                    objectFit='cover'
                    maxW={{ base: '6.75rem', md: '12.875rem' }}
                />

                <VStack spacing={4}>
                    <Heading as='h2' fontSize='2xl' textAlign='center' fontWeight='700'>
                        Вход не выполнен
                    </Heading>

                    <Text fontSize='md' color='blackAlpha.700' textAlign='center'>
                        Что-то пошло не так.
                        <br />
                        Попробуйте еще раз
                    </Text>
                </VStack>

                <Button alignSelf='stretch' size='lg' variant='black' onClick={onRetry}>
                    Повторить
                </Button>
            </VStack>
        </ModalBody>
    </ModalContainer>
);
