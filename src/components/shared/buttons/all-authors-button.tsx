import { Button, Icon, SystemProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import RightArrowIcon from '~/assets/icons/arrow-right-icon.svg?react';
import { pathes } from '~/constants/navigation/pathes';

type AllAuthorsButtonProps = {
    display?: SystemProps['display'];
};

export const AllAuthorsButton: React.FC<AllAuthorsButtonProps> = ({
    display,
}: AllAuthorsButtonProps) => {
    const navigate = useNavigate();

    const onClick = () => navigate(pathes.juiciest);

    return (
        <Button
            variant='clear'
            rightIcon={<Icon as={RightArrowIcon} boxSize={4} />}
            display={display}
            size={{ base: 'md', '2xl': 'lg' }}
            onClick={onClick}
        >
            Все авторы
        </Button>
    );
};
