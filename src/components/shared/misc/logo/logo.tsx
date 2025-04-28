import { Box, chakra, Flex } from '@chakra-ui/react';
import { Link } from 'react-router';

import LogoIcon from '~/assets/icons/logo-icon.svg?react';
import LogoTextIcon from '~/assets/icons/logo-text.svg?react';
import { pathes } from '~/constants/navigation/pathes';
import { getDisplay } from '~/utils/get-display-logo';

type LogoProps = {
    isFull?: boolean;
    responsive?: boolean;
    onClick?: () => void;
};

const LogoTextIconChakra = chakra(LogoTextIcon);

export const Logo: React.FC<LogoProps> = ({ onClick, isFull = false, responsive = true }) => {
    const display = getDisplay(isFull, responsive);

    return (
        <Box>
            <Link to={pathes.home} onClick={onClick}>
                <Flex alignItems='center' gap={1}>
                    <LogoIcon />
                    <LogoTextIconChakra display={display} />
                </Flex>
            </Link>
        </Box>
    );
};
