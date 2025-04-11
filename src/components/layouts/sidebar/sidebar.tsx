import { Box, Flex } from '@chakra-ui/react';

import { SidebarFooter } from './sidebar-footer';
import { SidebarNavigation } from './sidebar-navigation/sidebar-navigation';

export const Sidebar: React.FC = () => (
    <Flex as='aside' direction='column' h='100%' overflow='hidden' boxShadow='right' pt={6}>
        <Box overflowY='auto' maxH='100%'>
            <SidebarNavigation />
        </Box>

        <Box mt='auto'>
            <SidebarFooter />
        </Box>
    </Flex>
);
