import { Heading, Image, Link, ModalBody, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import modalImg from '~/assets/images/scatches/signup-success.png';
import { pathes } from '~/constants/navigation/pathes';

import { ModalContainer } from './modal-container';

type SignupSuccessModalProps = {
    isOpen: boolean;
    email: string;
    onClose: () => void;
};

export const SignupSuccessModal: React.FC<SignupSuccessModalProps> = ({
    email,
    isOpen,
    onClose,
}) => (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
        <ModalBody p={0}>
            <VStack spacing={8}>
                <Image
                    src={modalImg}
                    alt='People dancing'
                    w='100%'
                    h='100%'
                    objectFit='cover'
                    maxW={{ base: '6.75rem', md: '12.875rem' }}
                />

                <VStack spacing={4}>
                    <Heading as='h2' fontSize='2xl' textAlign='center' fontWeight='700'>
                        Остался последний шаг. Нужно верифицировать ваш e-mail
                    </Heading>

                    <Text fontSize='md' color='blackAlpha.900' textAlign='center'>
                        Мы отправили вам на почту
                        <br />
                        {email}
                        <br /> ссылку для верификации.
                    </Text>
                </VStack>

                <Text fontSize='xs' color='blackAlpha.600' textAlign='center'>
                    Не пришло письмо? Проверьте&nbsp;папку&nbsp;Спам.
                    <br />
                    По другим вопросам свяжитесь{' '}
                    <Link as={RouterLink} to={pathes.login} textDecoration='underline'>
                        с&nbsp;поддержкой
                    </Link>
                </Text>
            </VStack>
        </ModalBody>
    </ModalContainer>
);
