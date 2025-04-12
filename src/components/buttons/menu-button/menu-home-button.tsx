import HomeIcon from '~/assets/icons/bottom-menu-icons/home-icon.svg?react';

import { MenuButton } from './menu-button';

export const MenuHomeButton = () => (
    <MenuButton isActive={true} size='sm' label='Главная' icon={HomeIcon} activeLabelBold={true} />
);
