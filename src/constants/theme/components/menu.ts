import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    menuAnatomy.keys,
);

const variants = definePartsStyle({
    list: {
        p: 0,
        border: 'none',
        borderBottomRadius: '4px',
        borderTopRadius: 0,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1);',
    },
});

export const Menu = defineMultiStyleConfig({ variants: { 'menu-select': variants } });
