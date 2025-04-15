import { Flex, Grid } from '@chakra-ui/react';

import avatarImg from '~/assets/images/avatar.jpg';
import { AvatarMenuButton } from '~/components/buttons/menu-button/avatar-menu-button';
import { MenuHomeButton } from '~/components/buttons/menu-button/menu-home-button';
import { MenuPrescribeButton } from '~/components/buttons/menu-button/menu-prescribe-button';
import { MenuSearchButton } from '~/components/buttons/menu-button/menu-search-button';

export const Footer: React.FC = () => (
    <Grid templateColumns='repeat(4, 1fr)' w='100%' bg='lime.50' pt='14px' pb='10px'>
        <Flex justify='center'>
            <MenuHomeButton />
        </Flex>
        <Flex justify='center'>
            <MenuSearchButton />
        </Flex>
        <Flex justify='center'>
            <MenuPrescribeButton />
        </Flex>
        <Flex justify='center'>
            <AvatarMenuButton
                avatarUrl={avatarImg}
                size='sm'
                label='Мой профиль'
                activeLabelBold={true}
            />
        </Flex>
    </Grid>
);
