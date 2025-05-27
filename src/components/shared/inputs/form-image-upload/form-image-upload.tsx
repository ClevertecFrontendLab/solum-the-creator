import { Box, FormControl, FormErrorMessage, FormLabel, Icon, Image } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import ImageIcon from '~/assets/icons/image-icon.svg?react';

type FormImageUploadProps = {
    name: string;
    label?: string;
    error?: FieldError;
    register?: UseFormRegisterReturn;
    initialImage?: string;
};

export const FormImageUpload: React.FC<FormImageUploadProps> = ({
    name,
    label,
    error,
    register,
    initialImage,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(initialImage || null);

    const handleClick = () => inputRef.current?.click();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
        }

        register?.onChange?.(e);
    };

    return (
        <FormControl isInvalid={!!error} w='100%' h='100%'>
            {label && (
                <FormLabel mb={1} fontWeight={400}>
                    {label}
                </FormLabel>
            )}

            <Box
                onClick={handleClick}
                cursor='pointer'
                borderRadius='lg'
                bg='blackAlpha.200'
                border={error ? '2px solid red.500' : 'none'}
                h='100%'
                w='100%'
                display='flex'
                alignItems='center'
                justifyContent='center'
                overflow='hidden'
                position='relative'
                _hover={{
                    bg: 'blackAlpha.300',
                }}
            >
                {preview ? (
                    <Image
                        src={preview}
                        alt={name}
                        w='100%'
                        h='100%'
                        objectFit='cover'
                        position='absolute'
                        inset={0}
                    />
                ) : (
                    <Icon as={ImageIcon} boxSize={8} />
                )}

                <input
                    type='file'
                    accept='image/*'
                    {...register}
                    ref={(e) => {
                        register?.ref(e);
                        inputRef.current = e;
                    }}
                    onChange={handleChange}
                    style={{
                        display: 'none',
                    }}
                />
            </Box>

            {error && (
                <FormErrorMessage mt={1} fontSize='xs'>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    );
};
