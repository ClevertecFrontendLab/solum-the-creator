import { Box, Center, Icon, Image } from '@chakra-ui/react';

import ImageIcon from '~/assets/icons/image-icon.svg?react';
import { getImgUrl } from '~/utils/image';

type ImagePreviewProps = {
    name: string;
    value: File | string | null;
    height?: string;
    width?: string;
    error?: boolean;
    onClick?: () => void;
};

export const ImagePreview: React.FC<ImagePreviewProps> = ({
    name,
    value,
    height = '100%',
    width = '100%',
    error,
    onClick,
}) => {
    const isFile = value instanceof File;
    const src = isFile
        ? URL.createObjectURL(value)
        : typeof value === 'string' && value
          ? getImgUrl(value)
          : null;

    return (
        <Box
            onClick={onClick}
            cursor='pointer'
            borderRadius='lg'
            bg='blackAlpha.200'
            border={error ? '2px solid red' : 'none'}
            h={height}
            w={width}
            overflow='hidden'
            position='relative'
            _hover={{ bg: 'blackAlpha.300' }}
        >
            {src ? (
                <Image
                    src={src}
                    alt={name}
                    w='100%'
                    h='100%'
                    objectFit='cover'
                    position='absolute'
                    inset={0}
                />
            ) : (
                <Center h='100%'>
                    <Icon as={ImageIcon} boxSize={8} />
                </Center>
            )}
        </Box>
    );
};
