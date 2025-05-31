import { Box, chakra, Flex, Icon } from '@chakra-ui/react';
import { Link } from 'react-router';

import LogoIcon from '~/assets/icons/logo-icon.svg?react';
import LogoTextIcon from '~/assets/icons/logo-text.svg?react';
import { pathes } from '~/constants/navigation/pathes';
import { getDisplay } from '~/utils/get-display-logo';

export type LogoSize = 'sm' | 'md' | 'lg';

type LogoProps = {
    to?: string;
    isFull?: boolean;
    size?: LogoSize;
    responsive?: boolean;
    onClick?: () => void;
};

const LogoTextIconChakra = chakra(LogoTextIcon);

export const Logo: React.FC<LogoProps> = ({
    onClick,
    to = pathes.home,
    size = 'sm',
    isFull = false,
    responsive = true,
}) => {
    const display = getDisplay(isFull, responsive);

    const logoBoxSize = { sm: '32px', md: '38px', lg: '64px' };
    const textBoxSize = {
        width: { sm: '6rem', md: '7rem', lg: '12rem' },
        height: { sm: '1.5rem', md: '1.875rem', lg: '3.125rem' },
    };

    return (
        <Box data-test-id='header-logo'>
            <Link to={to} onClick={onClick}>
                <Flex alignItems='end' gap={1}>
                    <Icon as={LogoIcon} boxSize={logoBoxSize[size]} />
                    <Icon
                        as={LogoTextIconChakra}
                        display={display}
                        w={textBoxSize.width[size]}
                        h={textBoxSize.height[size]}
                    />
                </Flex>
            </Link>
        </Box>
    );
};
