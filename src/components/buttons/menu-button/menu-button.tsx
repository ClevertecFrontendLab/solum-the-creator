import { Box, Flex, Icon, IconButton, Text } from '@chakra-ui/react';

type MenuButtonProps = {
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    isActive?: boolean;
    onClick?: () => void;
    size?: 'sm' | 'md';
    activeLabelBold?: boolean;
};

const sizeMap = {
    sm: {
        textMt: 1,
        boxSize: '40px',
        iconSize: 5,
        gradientInset: '50%',
    },
    md: {
        textMt: 3,
        boxSize: '52px',
        iconSize: 6,
        gradientInset: '100%',
    },
};

export const MenuButton: React.FC<MenuButtonProps> = ({
    isActive = false,
    onClick,
    icon,
    label,
    activeLabelBold = false,
    size = 'md',
}) => {
    const { boxSize, gradientInset, iconSize, textMt } = sizeMap[size];

    return (
        <Flex direction='column' align='center' justify='center' position='relative'>
            <Box position='relative' w={boxSize} h={boxSize}>
                {isActive && (
                    <Box
                        position='absolute'
                        top={`-${gradientInset}`}
                        left={`-${gradientInset}`}
                        right={`-${gradientInset}`}
                        bottom={`-${gradientInset}`}
                        borderRadius='full'
                        bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.7) 0%, rgba(255, 255, 255, 0) 100%)'
                        zIndex={0}
                        pointerEvents='none'
                    />
                )}

                <IconButton
                    position='relative'
                    zIndex={1}
                    w={boxSize}
                    h={boxSize}
                    minW={boxSize}
                    minH={boxSize}
                    rounded='full'
                    bg={isActive ? 'black' : 'none'}
                    _hover={{ bg: 'blackAlpha.600' }}
                    icon={
                        <Icon as={icon} color={isActive ? 'lime.50' : 'black'} boxSize={iconSize} />
                    }
                    onClick={onClick}
                    aria-label={label}
                />
            </Box>

            <Text
                mt={textMt}
                zIndex={1}
                fontSize='xs'
                color={isActive && activeLabelBold ? 'black' : 'blackAlpha.700'}
                fontWeight={isActive && activeLabelBold ? '500' : '400'}
            >
                {label}
            </Text>
        </Flex>
    );
};
