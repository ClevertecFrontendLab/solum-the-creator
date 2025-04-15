import { ComponentStyleConfig } from '@chakra-ui/react';

export const Breadcrumb: ComponentStyleConfig = {
    baseStyle: {
        item: {
            color: 'blackAlpha.700',

            _hover: {
                color: 'lime.600',
            },
            _last: {
                color: 'black',
                cursor: 'default',
                _hover: {
                    cursor: 'pointer',
                    color: 'gray.900',
                },
            },
        },
        separator: {
            color: 'gray.800',
        },
    },
};
