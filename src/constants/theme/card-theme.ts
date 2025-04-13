import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    cardAnatomy.keys,
);

const cardVariant = definePartsStyle({
    container: {
        borderColor: 'blackAlpha.200',
    },
});

export const cardTheme = defineMultiStyleConfig({ variants: { outline: cardVariant } });
