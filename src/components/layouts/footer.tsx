import { Grid } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import avatarImg from '~/assets/images/avatar.jpg';
import { AvatarMenuButton } from '~/components/shared/buttons/menu-button/avatar-menu-button';
import { MenuHomeButton } from '~/components/shared/buttons/menu-button/menu-home-button';
import { MenuPrescribeButton } from '~/components/shared/buttons/menu-button/menu-prescribe-button';
import { MenuSearchButton } from '~/components/shared/buttons/menu-button/menu-search-button';
import { pathes } from '~/constants/navigation/pathes';

export const Footer: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <Grid templateColumns='repeat(4, 1fr)' w='100%' bg='lime.50' py={2.5} placeItems='center'>
            <MenuHomeButton isActive={isActive(pathes.home)} />
            <MenuSearchButton />
            <MenuPrescribeButton isActive={isActive(pathes.newRecipe)} />
            <AvatarMenuButton
                avatarUrl={avatarImg}
                size='sm'
                label='Мой профиль'
                activeLabelBold={true}
            />
        </Grid>
    );
};
