import { ComponentStyleConfig } from '@chakra-ui/react';

export const Heading: ComponentStyleConfig = {
    sizes: {
        md: {
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '1.56',
        },
        xs: {
            fontWeight: '400',
            lineHeight: '1.4',
        },
    },
    variants: {
        'section-title': {
            fontSize: ['2xl', '2xl', '2xl', '4xl', '4xl', '5xl'],
            fontWeight: '500',
        },
    },
};
