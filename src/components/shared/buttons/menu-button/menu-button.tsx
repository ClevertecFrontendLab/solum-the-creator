import { Box, Flex, Icon, IconButton, Text } from '@chakra-ui/react';

import { ActiveGradient } from './active-gradient';

type MenuButtonProps = {
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    isActive?: boolean;
    onClick?: () => void;
    size?: 'sm' | 'md';
    hoverColor?: string;
    activeLabelBold?: boolean;
};

type MenuButtonSize = 'sm' | 'md';

const SIZE_PROPS: Record<
    MenuButtonSize,
    {
        textMarginTop: number;
        boxSize: string;
        iconSize: number;
        gradientInset: string;
    }
> = {
    sm: {
        textMarginTop: 1,
        boxSize: '40px',
        iconSize: 5,
        gradientInset: '50%',
    },
    md: {
        textMarginTop: 3,
        boxSize: '52px',
        iconSize: 6,
        gradientInset: '100%',
    },
};

export const MenuButton: React.FC<MenuButtonProps> = ({
    label,
    icon,
    onClick,
    hoverColor = 'blackAlpha.600',
    isActive = false,
    activeLabelBold = false,
    size = 'md',
}) => {
    const { boxSize, iconSize, textMarginTop, gradientInset } = SIZE_PROPS[size];

    const iconColor = isActive ? 'lime.50' : 'black';
    const bgColor = isActive ? 'black' : 'none';

    const textColor = isActive && activeLabelBold ? 'black' : 'blackAlpha.700';
    const textFontWeight = isActive && activeLabelBold ? '500' : '400';

    return (
        <Flex direction='column' align='center' justify='center' position='relative'>
            <Box position='relative' w={boxSize} h={boxSize}>
                {isActive && <ActiveGradient inset={gradientInset} />}

                <IconButton
                    position='relative'
                    zIndex={1}
                    aria-label={label}
                    onClick={onClick}
                    w={boxSize}
                    h={boxSize}
                    minW={boxSize}
                    minH={boxSize}
                    rounded='full'
                    bg={bgColor}
                    _hover={{ bg: hoverColor }}
                    icon={<Icon as={icon} color={iconColor} boxSize={iconSize} />}
                />
            </Box>

            <Text
                mt={textMarginTop}
                zIndex={1}
                fontSize='xs'
                color={textColor}
                fontWeight={textFontWeight}
            >
                {label}
            </Text>
        </Flex>
    );
};
