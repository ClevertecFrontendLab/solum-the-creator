import { defineStyleConfig } from '@chakra-ui/react';

export const Badge = defineStyleConfig({
    variants: {
        brand: {
            bgColor: 'lime.200',
            color: 'black',
            fontSize: 'sm',
            lineHeight: '150%',
            fontWeight: '400',
            px: 2,
            py: 0.5,
            textTransform: 'none',
            borderRadius: 'md',
        },
    },
});
