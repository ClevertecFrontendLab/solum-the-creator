import PrescribeIcon from '~/assets/icons/bottom-menu-icons/note-icon.svg?react';

import { MenuButton } from './menu-button';

export const PrescribeButton: React.FC = () => (
    <MenuButton isActive={true} label='Записать рецепт' icon={PrescribeIcon} />
);
