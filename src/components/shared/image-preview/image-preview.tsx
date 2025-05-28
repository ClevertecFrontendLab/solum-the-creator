import { Box, Center, Icon, Image } from '@chakra-ui/react';

import ImageIcon from '~/assets/icons/image-icon.svg?react';

type ImagePreviewProps = {
    name: string;
    value: File | null;
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
}) => (
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
        {value ? (
            <Image
                src={URL.createObjectURL(value)}
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
