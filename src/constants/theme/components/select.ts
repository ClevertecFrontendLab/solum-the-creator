import { ComponentStyleConfig } from '@chakra-ui/react';

export const Select: ComponentStyleConfig = {
    variants: {
        'filled-lime': {
            field: {
                bg: 'white',
                borderColor: 'blackAlpha.400',
                borderWidth: '1px',
                _hover: {
                    borderColor: 'lime.600',
                },
                _focus: {
                    borderColor: 'lime.700',
                },
            },
        },
    },
};
