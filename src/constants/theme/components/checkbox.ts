import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    checkboxAnatomy.keys,
);

const brand = definePartsStyle({
    control: {
        borderColor: 'lime.200',
        _checked: {
            bg: 'lime.400',
            borderColor: 'lime.400',
            _hover: {
                bg: 'lime.300',
                borderColor: 'lime.200',
            },
        },
        _hover: {
            bg: 'transparent',
        },
    },
    icon: {
        color: 'black',
    },
    label: {
        color: 'gray.800',
    },
});

export const Checkbox = defineMultiStyleConfig({
    variants: { brand },
});
