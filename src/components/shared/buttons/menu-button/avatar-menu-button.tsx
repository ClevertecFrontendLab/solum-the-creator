import { Avatar, Box, Flex, IconButton, Text } from '@chakra-ui/react';

import { ActiveGradient } from './active-gradient';

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

    const textColor = isActive && activeLabelBold ? 'black' : 'blackAlpha.700';
    const textFontWeight = isActive && activeLabelBold ? '500' : '400';

    const bgColor = isActive ? 'black' : 'none';

    return (
        <Flex direction='column' align='center' justify='center' position='relative'>
            <Box position='relative' w={boxSize} h={boxSize}>
                {isActive && <ActiveGradient inset={gradientInset} />}

                <IconButton
                    position='relative'
                    zIndex={1}
                    w={boxSize}
                    h={boxSize}
                    minW={boxSize}
                    minH={boxSize}
                    rounded='full'
                    p={0}
                    bg={bgColor}
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
                color={textColor}
                fontWeight={textFontWeight}
            >
                {label}
            </Text>
        </Flex>
    );
};
