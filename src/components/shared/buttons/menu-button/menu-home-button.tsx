import { useNavigate } from 'react-router';

import HomeIcon from '~/assets/icons/bottom-menu-icons/home-icon.svg?react';
import { pathes } from '~/constants/navigation/pathes';

import { MenuButton } from './menu-button';

type MenuHomeButtonProps = {
    isActive?: boolean;
};

export const MenuHomeButton: React.FC<MenuHomeButtonProps> = ({ isActive }) => {
    const navigate = useNavigate();

    const onClick = () => navigate(pathes.home);

    return (
        <MenuButton
            isActive={isActive}
            size='sm'
            label='Главная'
            onClick={onClick}
            icon={HomeIcon}
            activeLabelBold={true}
        />
    );
};
