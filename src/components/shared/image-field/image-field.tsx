import { useDisclosure } from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { ImageUploadModal } from '~/components/modals/image-upload-modal';

import { ImagePreview } from '../image-preview/image-preview';

type ImageFieldProps = {
    name: string;
    value: File | string | null;
    register: UseFormRegisterReturn;
    error?: FieldError;
};

export const ImageField: React.FC<ImageFieldProps> = ({ name, value, register, error }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSave = (url: string) => {
        register.onChange({ target: { name, value: url } });
    };

    const handleDelete = () => {
        register.onChange({ target: { name, value: null } });
    };

    return (
        <>
            <ImagePreview name={name} value={value} error={!!error} onClick={onOpen} />

            <ImageUploadModal
                isOpen={isOpen}
                onClose={onClose}
                initialFile={value}
                onSave={handleSave}
                onDelete={handleDelete}
            />
        </>
    );
};
