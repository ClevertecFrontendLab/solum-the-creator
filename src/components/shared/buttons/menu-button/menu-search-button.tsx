import SearchIcon from '~/assets/icons/bottom-menu-icons/search-icon.svg?react';

import { MenuButton } from './menu-button';

export const MenuSearchButton = () => (
    <MenuButton size='sm' label='Поиск' icon={SearchIcon} activeLabelBold={true} />
);
