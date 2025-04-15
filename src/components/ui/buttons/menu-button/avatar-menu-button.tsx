import { Avatar, Box, Flex, IconButton, Text } from '@chakra-ui/react';

type AvatarMenuButtonProps = {
    label: string;
    avatarUrl: string;
    isActive?: boolean;
    onClick?: () => void;
    size?: 'sm' | 'md';
    activeLabelBold?: boolean;
};

const sizeMap = {
    sm: {
        textMt: 1,
        boxSize: '40px',
        avatarSize: '40px',
        gradientInset: '50%',
    },
    md: {
        textMt: 3,
        boxSize: '52px',
        avatarSize: '52px',
        gradientInset: '100%',
    },
};

export const AvatarMenuButton: React.FC<AvatarMenuButtonProps> = ({
    label,
    avatarUrl,
    isActive = false,
    onClick,
    size = 'md',
    activeLabelBold = false,
}) => {
    const { boxSize, avatarSize, gradientInset, textMt } = sizeMap[size];

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
                    p={0}
                    bg={isActive ? 'black' : 'none'}
                    _hover={{ bg: 'blackAlpha.600' }}
                    aria-label={label}
                    onClick={onClick}
                    icon={<Avatar src={avatarUrl} name={label} boxSize={avatarSize} />}
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
