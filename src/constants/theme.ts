import { accordionAnatomy } from '@chakra-ui/anatomy';
import {
    ComponentStyleConfig,
    createMultiStyleConfigHelpers,
    extendTheme,
    ThemeConfig,
} from '@chakra-ui/react';

const Breadcrumb: ComponentStyleConfig = {
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

export const theme: ThemeConfig = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#ffffff',
                color: '#000000',
            },
        },
    },
    components: {
        Heading: {
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
        },
        Button: {
            variants: {
                clear: {
                    backgroundColor: 'transparent',
                },
            },
        },
        Breadcrumb,
        Accordion,
    },
    layerStyles: {
        customScrollbar: {
            '&::-webkit-scrollbar': {
                width: '8px',
            },
            '&::-webkit-scrollbar-track': {
                bg: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                bg: 'blackAlpha.300',
                borderRadius: '8px',
            },
            '&::-webkit-scrollbar-button': {
                display: 'none',
                height: 0,
                width: 0,
            },
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--chakra-colors-blackAlpha-300) transparent',
        },
    },

    colors: {
        black: '#000000',
        white: '#ffffff',
        lime: {
            50: '#ffffd3',
            100: '#eaffc7',
            200: '#d7ff94',
            300: '#c4ff61',
            400: '#bdff3d',
            500: '#b1ff2e',
            600: '#2db100',
            700: '#207e00',
            800: '#134b00',
            900: '#003900',
        },
    },
    shadows: {
        right: '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);',
    },
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
    },
});
