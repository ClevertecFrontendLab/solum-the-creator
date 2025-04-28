import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    cardAnatomy.keys,
);

const cardVariant = definePartsStyle({
    container: {
        bgColor: 'white',
        borderColor: 'blackAlpha.200',
        transition: 'box-shadow 0.2s ease-in-out',
        _hover: {
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1);',
        },
    },
});

const brandCardVariant = definePartsStyle({
    container: {
        bgColor: 'lime.300',
        borderColor: 'blackAlpha.200',
    },
});

export const Card = defineMultiStyleConfig({
    variants: { outline: cardVariant, brand: brandCardVariant },
});
