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
        custom: {
            field: {
                bg: 'white',
                borderColor: 'blackAlpha.200',
                borderWidth: '1px',
                _hover: {
                    borderColor: '#c1f07f',
                },
                _focus: {
                    borderColor: '#d7ff94',
                    boxShadow: '0 0 0 1px #d7ff94',
                },
                _invalid: {
                    border: '2px solid #e53e3e',
                    boxShadow: 'none',
                },
            },
        },
    },
};
