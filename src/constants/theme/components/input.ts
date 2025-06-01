import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { ComponentStyleConfig, createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const custom = definePartsStyle({
    field: {
        bg: '#fff',
        border: '1px solid #d7ff94',
        borderRadius: 'md',
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
        _placeholder: {
            color: 'blackAlpha.700',
        },
        fontFamily: 'inherit',
    },
});

export const Input: ComponentStyleConfig = {
    variants: {
        custom,
        search: {
            field: {
                rounded: { base: 'sm', md: 'md' },
                borderColor: 'blackAlpha.600',
                borderWidth: '1px',
                _hover: { borderColor: 'lime.700' },
                _focus: { borderColor: 'lime.700' },
                _placeholder: {
                    color: 'lime.800',
                },
            },
        },
    },
    defaultProps: {
        size: 'lg',
    },
};
