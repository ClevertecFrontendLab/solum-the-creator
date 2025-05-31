import { useNavigate } from 'react-router';

import PrescribeIcon from '~/assets/icons/bottom-menu-icons/note-icon.svg?react';
import { pathes } from '~/constants/navigation/pathes';

import { MenuButton } from './menu-button';

type MenuPrescribeButtonProps = {
    isActive?: boolean;
};

export const MenuPrescribeButton: React.FC<MenuPrescribeButtonProps> = ({ isActive }) => {
    const navigate = useNavigate();

    const onClick = () => navigate(pathes.newRecipe);

    return (
        <MenuButton
            size='sm'
            label='Записать'
            onClick={onClick}
            icon={PrescribeIcon}
            activeLabelBold={true}
            isActive={isActive}
            dataTestId='add-recipe-button'
        />
    );
};
