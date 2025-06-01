import { useNavigate } from 'react-router';

import PrescribeIcon from '~/assets/icons/bottom-menu-icons/note-icon.svg?react';
import { pathes } from '~/constants/navigation/pathes';

import { MenuButton } from './menu-button';

export const PrescribeButton: React.FC = () => {
    const navigate = useNavigate();

    const onClick = () => navigate(pathes.newRecipe);

    return (
        <MenuButton
            isActive={true}
            onClick={onClick}
            label='Записать рецепт'
            icon={PrescribeIcon}
            dataTestId='add-recipe-button'
        />
    );
};
