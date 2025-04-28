import { Button, Icon } from '@chakra-ui/react';

type StatButton = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    count: number;
    onClick?: () => void;
    size?: 'xs' | 'sm';
};

export const StatButton: React.FC<StatButton> = ({ icon, count, onClick, size = 'xs' }) => {
    const isSmall = size === 'xs';
    return (
        <Button
            variant='clear'
            size={size}
            iconSpacing='6px'
            leftIcon={<Icon as={icon} />}
            onClick={onClick}
            p={isSmall ? 1 : 3}
            color='lime.600'
        >
            {count}
        </Button>
    );
};
