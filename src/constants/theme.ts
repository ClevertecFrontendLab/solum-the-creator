import { extendTheme, ThemeConfig } from '@chakra-ui/react';

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
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
    },
});
