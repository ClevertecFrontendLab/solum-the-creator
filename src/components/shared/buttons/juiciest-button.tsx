import { Button, Icon, SystemProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import RightArrowIcon from '~/assets/icons/arrow-right-icon.svg?react';
import { pathes } from '~/constants/pathes';

type JuiciestButtonProps = {
    display?: SystemProps['display'];
};

export const JuiciestButton = ({ display }: JuiciestButtonProps) => {
    const navigate = useNavigate();

    const onClick = () => navigate(pathes.juiciest);

    return (
        <Button
            variant='brand'
            rightIcon={<Icon as={RightArrowIcon} boxSize={4} />}
            display={display}
            onClick={onClick}
        >
            Вся подборка
        </Button>
    );
};
