import { Box, Spacer } from '@chakra-ui/react';

import { SidebarFooter } from './sidebar-footer';
import { SidebarNavigation } from './sidebar-navigation/sidebar-navigation';

export const SidebarContent = () => (
    <>
        <Box overflowY='auto' maxH='100%' pb={3} w='100%'>
            <SidebarNavigation />
        </Box>
        <Spacer />
        <SidebarFooter />
    </>
);
