import { Heading, Image, Link, ModalBody, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import modalImg from '~/assets/images/scatches/verification-error.png';
import { pathes } from '~/constants/navigation/pathes';
import { verifyErrorModalText } from '~/constants/texts/modals';

import { ModalContainer } from './modal-container';

type VerifyErrorModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const VerifyErrorModal: React.FC<VerifyErrorModalProps> = ({ isOpen, onClose }) => (
    <ModalContainer isOpen={isOpen} onClose={onClose} dataTestId='email-verification-failed-modal'>
        <ModalBody p={0}>
            <VStack spacing={8}>
                <Image
                    src={modalImg}
                    alt='Woman sitting'
                    w='100%'
                    h='100%'
                    objectFit='cover'
                    maxW={{ base: '6.75rem', md: '12.875rem' }}
                />

                <VStack spacing={4}>
                    <Heading as='h2' fontSize='2xl' textAlign='center' fontWeight='700'>
                        {verifyErrorModalText.title}
                    </Heading>

                    <Text fontSize='md' color='blackAlpha.700' textAlign='center'>
                        {verifyErrorModalText.description}
                    </Text>
                </VStack>

                <Text fontSize='xs' color='blackAlpha.600' textAlign='center'>
                    Остались вопросы? Свяжитесь{' '}
                    <Link as={RouterLink} to={pathes.login} textDecoration='underline'>
                        с&nbsp;поддержкой
                    </Link>
                </Text>
            </VStack>
        </ModalBody>
    </ModalContainer>
);
