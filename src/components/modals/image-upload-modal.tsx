import { Button, Heading, VStack } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import { notificationServerErrorImage } from '~/constants/texts/notifications';
import { useUploadFileMutation } from '~/query/services/file';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

import { ImagePreview } from '../shared/image-preview/image-preview';
import { ModalContainer } from './modal-container';

type ImageUploadModalProps = {
    isOpen: boolean;
    initialFile: File | string | null;
    onSave: (url: string) => void;
    onDelete: () => void;
    onClose: () => void;
    dataTestId?: string;
};

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
    isOpen,
    initialFile,
    onSave,
    onDelete,
    onClose,
    dataTestId,
}) => {
    const [file, setFile] = useState<File | string | null>(initialFile);
    const inputRef = useRef<HTMLInputElement>(null);

    const [uploadFile, { isLoading }] = useUploadFileMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        setFile(initialFile);
    }, [initialFile, isOpen]);

    const pickFile = () => inputRef.current?.click();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0];

        if (selected) {
            setFile(selected);
        }

        e.target.value = '';
    };

    const handleSave = async () => {
        if (!file || typeof file === 'string') return;

        try {
            const { url } = await uploadFile(file).unwrap();
            setFile(url);
            onSave(url);
            onClose();
        } catch (_err) {
            dispatch(
                addNotification({
                    type: 'error',
                    title: notificationServerErrorImage.title,
                    description: notificationServerErrorImage.description,
                }),
            );

            onClose();
        }
    };

    const handleDelete = () => {
        setFile(null);
        onDelete();
        onClose();
    };

    return (
        <ModalContainer isOpen={isOpen} onClose={onClose} dataTestId='recipe-image-modal'>
            <VStack align='center' spacing={8}>
                <Heading as='h2' fontSize='2xl' textAlign='center' fontWeight='700'>
                    Изоброжение
                </Heading>

                <ImagePreview
                    name='preview'
                    value={file}
                    onClick={pickFile}
                    height='12.875rem'
                    width='12.875rem'
                    dataTestId='recipe-image-modal-image-block'
                    dataTestIdPreview='recipe-image-modal-preview-image'
                />

                <input
                    type='file'
                    accept='image/*'
                    ref={inputRef}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    data-test-id={dataTestId}
                />

                <VStack spacing={4} w='100%' align='stretch'>
                    {file && (
                        <>
                            <Button
                                variant='black'
                                size='lg'
                                onClick={handleSave}
                                isLoading={isLoading}
                            >
                                Сохранить
                            </Button>
                            <Button
                                variant='outline'
                                size='lg'
                                colorScheme='black'
                                onClick={handleDelete}
                            >
                                Удалить
                            </Button>
                        </>
                    )}
                </VStack>
            </VStack>
        </ModalContainer>
    );
};
