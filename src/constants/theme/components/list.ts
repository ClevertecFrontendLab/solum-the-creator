import { listAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const variants = {
    'color-variation': definePartsStyle({
        container: {
            '& > *:nth-of-type(odd)': {
                bg: 'blackAlpha.100',
            },
            '& > *:nth-of-type(even)': {
                bg: 'white',
            },
        },
    }),
};

export const List = defineMultiStyleConfig({ variants });
