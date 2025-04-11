import { Box, Flex, Icon, IconButton, Text } from '@chakra-ui/react';

type MenuButtonProps = {
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    isActive?: boolean;
    onClick?: () => void;
    size?: 'sm' | 'md';
};

const sizeMap = {
    sm: {
        boxSize: '40px',
        iconSize: 5,
        gradientInset: '80%',
    },
    md: {
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
    size = 'md',
}) => {
    const { boxSize, gradientInset, iconSize } = sizeMap[size];

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
                        bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%)'
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
                    _hover={{ bg: 'blackAlpha.700' }}
                    icon={
                        <Icon as={icon} color={isActive ? 'lime.50' : 'black'} boxSize={iconSize} />
                    }
                    onClick={onClick}
                    aria-label={label}
                />
            </Box>

            <Text mt={3} zIndex={1} fontSize='xs' color='blackAlpha.700'>
                {label}
            </Text>
        </Flex>
    );
};
