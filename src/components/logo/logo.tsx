import { chakra, Flex } from '@chakra-ui/react';

import LogoIcon from '~/assets/icons/logo-icon.svg?react';
import LogoTextIcon from '~/assets/icons/logo-text.svg?react';
import { getDisplay } from '~/utils/get-display-logo';

type LogoProps = {
    isFull?: boolean;
    responsive?: boolean;
};

const LogoTextIconChakra = chakra(LogoTextIcon);

export const Logo: React.FC<LogoProps> = ({ isFull = false, responsive = true }) => {
    const display = getDisplay(isFull, responsive);

    return (
        <Flex alignItems='flex-end' gap={1}>
            <LogoIcon />
            <LogoTextIconChakra display={display} />
        </Flex>
    );
};
