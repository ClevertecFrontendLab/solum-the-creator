import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    accordionAnatomy.keys,
);

const sidebarAccordion = definePartsStyle({
    button: {
        bg: 'transparent',
        fontWeight: '500',
        _hover: {
            bg: 'lime.50',
        },
        _active: {
            bg: 'lime.100',
        },
    },
    panel: {
        p: 0,
    },
});

export const Accordion = defineMultiStyleConfig({ variants: { sidebar: sidebarAccordion } });
