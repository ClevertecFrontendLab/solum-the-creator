import { Button, Icon, SystemProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import RightArrowIcon from '~/assets/icons/arrow-right-icon.svg?react';
import { pathes } from '~/constants/pathes';

type JuiciestButtonProps = {
    display?: SystemProps['display'];
} & React.ComponentProps<typeof Button>;

export const JuiciestButton = ({ display, ...props }: JuiciestButtonProps) => {
    const navigate = useNavigate();

    const onClick = () => navigate(pathes.juiciest);

    return (
        <Button
            variant='brand'
            rightIcon={<Icon as={RightArrowIcon} boxSize={4} />}
            display={display}
            size={{ base: 'md', '2xl': 'lg' }}
            onClick={onClick}
            {...props}
        >
            Вся подборка
        </Button>
    );
};
