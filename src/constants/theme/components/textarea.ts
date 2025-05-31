import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const custom = defineStyle({
    bg: '#fff',
    border: '1px solid',
    borderColor: 'gray.200',
    borderRadius: 'md',
    fontSize: 'sm',
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
});

export const Textarea = defineStyleConfig({
    variants: { custom },
});
