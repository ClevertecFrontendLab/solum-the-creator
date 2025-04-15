import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
    variants: {
        clear: {
            backgroundColor: 'transparent',
        },
        black: {
            bg: 'black',
            color: 'white',
            _hover: { bg: 'black.700' },
            _active: { bg: 'black.800' },
            _disabled: {
                bg: 'blackAlpha.200',
                color: 'blackAlpha.400',
            },
        },
        brand: {
            bg: 'lime.400',
            color: 'black',
            _hover: { bg: 'lime.500' },
            _active: { bg: 'lime.550' },
            _disabled: {
                bg: 'blackAlpha.200',
                color: 'blackAlpha.400',
            },
        },
    },
};
