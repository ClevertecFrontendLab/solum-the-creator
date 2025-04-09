import { Button, Icon } from '@chakra-ui/react';

export type ProfileNotificationItemProps = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label?: string;
    size?: 'xs' | 'md';
    onClick?: () => void;
};

export const ProfileNotificationItem: React.FC<ProfileNotificationItemProps> = ({
    icon,
    label,
    size = 'xs',
    onClick,
}) => {
    const isSmall = size === 'xs';
    return (
        <Button
            size={size}
            leftIcon={<Icon as={icon} />}
            iconSpacing={isSmall ? '6px' : '8px'}
            colorScheme='lime'
            variant='ghost'
            onClick={onClick}
        >
            {label}
        </Button>
    );
};
