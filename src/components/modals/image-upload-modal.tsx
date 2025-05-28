import { Button, Heading, VStack } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import { ImagePreview } from '../shared/image-preview/image-preview';
import { ModalContainer } from './modal-container';

type ImageUploadModalProps = {
    isOpen: boolean;
    initialFile: File | null;
    onSave: (file: File) => void;
    onDelete: () => void;
    onClose: () => void;
};

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
    isOpen,
    initialFile,
    onSave,
    onDelete,
    onClose,
}) => {
    const [file, setFile] = useState<File | null>(initialFile);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setFile(initialFile);
    }, [initialFile, isOpen]);

    const pickFile = () => inputRef.current?.click();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setFile(file);
        }
    };

    const handleSave = () => {
        if (file) {
            onSave(file);
        }
    };

    const handleDelete = () => {
        setFile(null);
        onDelete();
    };

    return (
        <ModalContainer isOpen={isOpen} onClose={onClose}>
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
                />

                <input
                    type='file'
                    accept='image/*'
                    ref={inputRef}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />

                <VStack spacing={4}>
                    {file && (
                        <>
                            <Button variant='black' onClick={handleSave}>
                                Сохранить
                            </Button>
                            <Button variant='outline' colorScheme='black' onClick={handleDelete}>
                                Удалить
                            </Button>
                        </>
                    )}
                </VStack>
            </VStack>
        </ModalContainer>
    );
};
