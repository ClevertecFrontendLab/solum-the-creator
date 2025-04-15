export const globalStyles = {
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
};
