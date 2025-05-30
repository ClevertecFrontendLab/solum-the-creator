import { Button, Heading, Icon, Image, ModalBody, Text, VStack } from '@chakra-ui/react';

import EditIcon from '~/assets/icons/edit-icon.svg?react';
import modalImg from '~/assets/images/scatches/breakfast.png';

import { ModalContainer } from './modal-container';

type LeavePageModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSaveDraft: () => void;
    onExitWithoutSaving: () => void;
};

export const LeavePageModal: React.FC<LeavePageModalProps> = ({
    isOpen,
    onClose,
    onSaveDraft,
    onExitWithoutSaving,
}) => (
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
                        Выйти без сохранения?
                    </Heading>

                    <Text fontSize='md' color='blackAlpha.700' textAlign='center'>
                        Чтобы сохранить, нажмите кнопку сохранить черновик
                    </Text>
                </VStack>

                <VStack w='100%' spacing={4}>
                    <Button
                        leftIcon={<Icon as={EditIcon} />}
                        alignSelf='stretch'
                        size='lg'
                        variant='black'
                        onClick={onSaveDraft}
                    >
                        Сохранить черновик
                    </Button>

                    <Button
                        alignSelf='stretch'
                        size='lg'
                        variant='clear'
                        onClick={onExitWithoutSaving}
                    >
                        Выйти без сохранения
                    </Button>
                </VStack>
            </VStack>
        </ModalBody>
    </ModalContainer>
);
