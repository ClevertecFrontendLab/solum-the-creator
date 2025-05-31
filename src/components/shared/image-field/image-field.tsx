import { useDisclosure } from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { ImageUploadModal } from '~/components/modals/image-upload-modal';

import { ImagePreview } from '../image-preview/image-preview';

type ImageFieldProps = {
    name: string;
    value: File | string | null;
    register: UseFormRegisterReturn;
    error?: FieldError;
    dataTestId?: string;
    dataTestIdInput?: string;
    dataTestIdPreview?: string;
};

export const ImageField: React.FC<ImageFieldProps> = ({
    name,
    value,
    register,
    error,
    dataTestId,
    dataTestIdInput,
    dataTestIdPreview,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSave = (url: string) => {
        register.onChange({ target: { name, value: url } });
    };

    const handleDelete = () => {
        register.onChange({ target: { name, value: null } });
    };

    return (
        <>
            <ImagePreview
                name={name}
                value={value}
                error={!!error}
                onClick={onOpen}
                dataTestId={dataTestId}
                dataTestIdPreview={dataTestIdPreview}
            />

            <ImageUploadModal
                isOpen={isOpen}
                onClose={onClose}
                initialFile={value}
                onSave={handleSave}
                onDelete={handleDelete}
                dataTestId={dataTestIdInput}
            />
        </>
    );
};
