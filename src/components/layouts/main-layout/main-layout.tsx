import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { RightSidebar } from '../right-sidebar/right-sidebar';
import { Sidebar } from '../sidebar/sidebar';

export const MainLayout: React.FC = () => (
    <Box>
        <Box position='fixed' top={0} left={0} right={0} zIndex={5}>
            <Header />
        </Box>

        <Box
            position='fixed'
            top={{ base: '4rem', md: '5rem' }}
            left={0}
            bottom={0}
            w='16rem'
            display={{ base: 'none', md: 'block' }}
            zIndex={1}
        >
            <Sidebar />
        </Box>

        <Box
            as='aside'
            position='fixed'
            top={{ base: '4rem', md: '5rem' }}
            right={0}
            bottom={0}
            w='13rem'
            display={{ base: 'none', md: 'block' }}
            zIndex={1}
        >
            <RightSidebar />
        </Box>

        <Box
            as='main'
            pt={{ base: '4rem', md: '5rem' }}
            pb={{ base: '84px', md: 0 }}
            px={{ base: 4, sm: 5, md: 6 }}
            ml={{ base: 0, md: '16rem' }}
            mr={{ base: 0, md: '13rem' }}
            overflowY='auto'
            minH='100vh'
            maxW='88rem'
        >
            <Outlet />
        </Box>

        <Box
            as='footer'
            position='fixed'
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'flex', md: 'none' }}
            zIndex={1}
        >
            <Footer />
        </Box>
    </Box>
);
