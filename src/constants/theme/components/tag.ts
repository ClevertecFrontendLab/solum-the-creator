import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys);

const brandPrimary = definePartsStyle({
    container: {
        bg: 'lime.100',
        color: 'lime.700',
        border: '1px solid',
        borderColor: 'lime.400',
    },
});

export const Tag = defineMultiStyleConfig({
    variants: {
        brand: brandPrimary,
    },
});
