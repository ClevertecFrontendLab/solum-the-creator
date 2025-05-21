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

const categoryVariant = defineStyle({
    tab: {
        bg: 'transparent',
        fontWeight: '500',
        color: 'lime.800',
        _selected: {
            color: 'lime.600',
            borderBottom: '2px solid',
            borderBottomColor: 'lime.600',
        },
    },
    tablist: {
        borderBottom: '1px solid',
        borderBottomColor: 'blackAlpha.200',
    },
});

const authVariant = defineStyle({
    tab: {
        bg: 'transparent',
        fontWeight: '500',
        fontSize: { base: 'md', md: 'lg' },
        px: 6,
        py: '15px',
        color: 'lime.800',
        _selected: {
            color: 'lime.700',
            borderBottom: '2px solid',
            borderBottomColor: 'lime.700',
            py: '13px',
        },
        _focus: {
            boxShadow: 'none',
        },
    },
    tablist: {
        borderBottom: '2px solid',
        borderBottomColor: 'blackAlpha.200',
        gap: 4,
    },
});

const variants = {
    subcategory: subcategoryVariant,
    'category-horizontal': categoryVariant,
    auth: authVariant,
};

export const Tabs = { variants };
