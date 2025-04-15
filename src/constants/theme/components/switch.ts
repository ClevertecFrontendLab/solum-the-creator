import { defineStyleConfig } from '@chakra-ui/react';

export const Switch = defineStyleConfig({
    baseStyle: {
        track: {
            bg: 'blackAlpha.300',
            _checked: {
                bg: 'lime.400',
            },
        },
    },
});
