import { Flex } from '@chakra-ui/react';

import { SidebarContent } from './sidebar-content';

export const Sidebar: React.FC = () => (
    <Flex as='aside' direction='column' h='100%' overflow='hidden' boxShadow='right' pt={6}>
        <SidebarContent />
    </Flex>
);
