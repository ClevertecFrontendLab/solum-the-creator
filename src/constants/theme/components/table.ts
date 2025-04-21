import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    tableAnatomy.keys,
);

const customTh = defineStyle({
    fontSize: 'xs',
    px: { base: 2, sm: 6 },
    py: { base: 5 },
});

const customTd = defineStyle({
    fontSize: 'sm',
    px: { base: 2, sm: 6 },
    pr: { base: 3, sm: 6 },
    py: { base: 2.5, md: 4 },
});

const sizes = {
    custom: definePartsStyle({ th: customTh, td: customTd }),
};

const recipeVariant = definePartsStyle({
    th: {
        color: 'lime.600',
    },
    td: {
        fontWeight: '500',
        color: 'blackAlpha.900',
    },
    tbody: {
        tr: {
            '&:nth-of-type(odd)': {
                'th, td': {
                    bg: 'blackAlpha.100',
                },
            },
        },
    },
});

export const Table = defineMultiStyleConfig({ sizes, variants: { recipe: recipeVariant } });
