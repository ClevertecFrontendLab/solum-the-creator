import { ComponentStyleConfig } from '@chakra-ui/react';

export const Input: ComponentStyleConfig = {
    variants: {
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
