import { Button, Icon } from '@chakra-ui/react';

type StatButton = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    count: number;
    onClick?: () => void;
};

export const StatButton: React.FC<StatButton> = ({ icon, count, onClick }) => (
    <Button
        variant='clear'
        size='xs'
        iconSpacing='6px'
        leftIcon={<Icon as={icon} />}
        onClick={onClick}
        p={1}
        color='lime.600'
    >
        {count}
    </Button>
);
