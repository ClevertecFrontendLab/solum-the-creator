import { Button, Icon } from '@chakra-ui/react';

export type ProfileNotificationItemProps = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label?: string | number;
    size?: 'xs' | 'md';
    onClick?: () => void;
};

export const ProfileNotificationItem: React.FC<ProfileNotificationItemProps> = ({
    icon,
    label,
    size = 'xs',
    onClick,
}) => {
    const iconSpacing = size === 'xs' ? '6px' : '8px';
    const labelText = String(label ?? '');

    return (
        <Button
            size={size}
            leftIcon={<Icon as={icon} />}
            iconSpacing={iconSpacing}
            colorScheme='lime'
            variant='ghost'
            onClick={onClick}
        >
            {labelText}
        </Button>
    );
};
