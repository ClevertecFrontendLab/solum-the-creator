import { Button, Icon, SystemProps } from '@chakra-ui/react';
import { Link } from 'react-router';

import RightArrowIcon from '~/assets/icons/arrow-right-icon.svg?react';
import { pathes } from '~/constants/navigation/pathes';

type JuiciestButtonProps = {
    display?: SystemProps['display'];
} & React.ComponentProps<typeof Button>;

export const JuiciestButton = ({ display, ...props }: JuiciestButtonProps) => (
    <Button
        as={Link}
        to={pathes.juiciest}
        variant='brand'
        rightIcon={<Icon as={RightArrowIcon} boxSize={4} />}
        display={display}
        alignItems='center'
        size={{ base: 'md', '2xl': 'lg' }}
        {...props}
    >
        Вся подборка
    </Button>
);
