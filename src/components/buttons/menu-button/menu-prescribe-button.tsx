import PrescribeIcon from '~/assets/icons/bottom-menu-icons/note-icon.svg?react';

import { MenuButton } from './menu-button';

export const MenuPrescribeButton = () => (
    <MenuButton size='sm' label='Записать' icon={PrescribeIcon} activeLabelBold={true} />
);
