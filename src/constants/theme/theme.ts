import { accordionAnatomy } from '@chakra-ui/anatomy';
import {
    ComponentStyleConfig,
    createMultiStyleConfigHelpers,
    defineStyleConfig,
    extendTheme,
    ThemeConfig,
} from '@chakra-ui/react';

import { cardTheme } from './card-theme';

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

const Badge = defineStyleConfig({
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

const Switch = defineStyleConfig({
    baseStyle: {
        track: {
            bg: 'blackAlpha.300',
            _checked: {
                bg: 'lime.400',
            },
        },
    },
});

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

const Accordion = defineMultiStyleConfig({ variants: { sidebar: sidebarAccordion } });

export const breakpoints = {
    base: '0rem',
    sm: '38rem', // 600px
    md: '52rem', // 832px
    lg: '64rem', // 1024px
    xl: '80rem', // 1280px
    '2xl': '96rem', // 1536px
};

export const theme: ThemeConfig = extendTheme({
    breakpoints,
    styles: {
        global: {
            body: {
                bg: '#ffffff',
                color: '#000000',
            },
            'html, body, *': {
                '&::-webkit-scrollbar': {
                    width: 2,
                    borderRadius: '10',
                    backgroundColor: 'blackAlpha.50',
                },
                '&::-webkit-scrollbar-track': {
                    borderRadius: '10',
                    bgColor: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '10',
                    bg: `blackAlpha.300`,
                },
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
                black: {
                    bg: 'black',
                    color: 'white',
                    _hover: {
                        bg: 'black.700',
                    },
                    _active: {
                        bg: 'black.800',
                    },
                    _disabled: {
                        bg: 'blackAlpha.200',
                        color: 'blackAlpha.400',
                    },
                },
                brand: {
                    bg: 'lime.400',
                    color: 'black',
                    _hover: {
                        bg: 'lime.500',
                    },
                    _active: {
                        bg: 'lime.550',
                    },
                    _disabled: {
                        bg: 'blackAlpha.200',
                        color: 'blackAlpha.400',
                    },
                },
            },
        },
        Breadcrumb,
        Accordion,
        Switch,
        Card: cardTheme,
        Badge,
    },
    colors: {
        black: {
            50: '#f2f2f2',
            100: '#d9d9d9',
            200: '#bfbfbf',
            300: '#a6a6a6',
            400: '#8c8c8c',
            500: '#737373',
            600: '#595959',
            700: '#404040',
            800: '#262626',
            900: '#000000',
        },
        white: '#ffffff',
        lime: {
            50: '#ffffd3',
            100: '#eaffc7',
            200: '#d7ff94',
            300: '#c4ff61',
            400: '#bdff3d',
            500: '#b1ff2e',
            550: '#a5ff1f',
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
