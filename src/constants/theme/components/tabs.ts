import { defineStyle } from '@chakra-ui/react';

const subcategoryVariant = defineStyle({
    tab: {
        bg: 'transparent',
        fontWeight: '500',
        textAlign: 'left',
        _before: {
            content: '""',
            position: 'absolute',
            bgColor: 'lime.300',
            right: '100%',
            top: 2,
            bottom: 1,
            width: 0.5,
            transition: 'all 0.2s ease',
        },
        _selected: {
            fontWeight: 'bold',
            _before: {
                top: 1,
                width: 2,
            },
        },
        _focus: {
            boxShadow: 'none',
            outline: 'none',
        },
        _focusVisible: {
            boxShadow: 'none',
            outline: 'none',
        },
    },
    tablist: {
        borderColor: 'inherit',
    },
    tabpanel: {
        borderColor: 'inherit',
    },
});

const variants = {
    subcategory: subcategoryVariant,
};

export const Tabs = { variants };
