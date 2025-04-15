import { Box, Hide, Show } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Header } from '~/components/layouts/header/header';

import { Footer } from '../footer/footer';
import { RightSidebar } from '../right-sidebar/right-sidebar';
import { Sidebar } from '../sidebar/sidebar';

export const MainLayout: React.FC = () => (
    <Box position='relative'>
        <Box position='fixed' top={0} left={0} right={0} zIndex={5}>
            <Header />
        </Box>

        <Show above='md'>
            <Box
                position='fixed'
                top={{ base: '4rem', md: '5rem' }}
                left={0}
                bottom={0}
                w='16rem'
                zIndex={1}
            >
                <Sidebar />
            </Box>
        </Show>

        <Show above='md'>
            <Box
                as='aside'
                position='fixed'
                top={{ base: '4rem', md: '5rem' }}
                right={0}
                bottom={0}
                w='13rem'
                zIndex={1}
            >
                <RightSidebar />
            </Box>
        </Show>

        <Box
            as='main'
            pt={{ base: '4rem', md: '5rem' }}
            pb={{ base: '5.25rem', md: 0 }}
            px={{ base: 4, sm: 5, md: 6 }}
            ml={{ base: 0, md: '16rem' }}
            mr={{ base: 0, md: '13rem' }}
            minH='100vh'
            overflowY='auto'
            maxW={{ base: '100%', lg: '58rem', '2xl': '88rem' }}
        >
            <Outlet />
        </Box>

        <Hide above='md'>
            <Box
                as='footer'
                position='absolute'
                bottom={0}
                left={0}
                right={0}
                zIndex={1}
                data-test-id='footer'
                width='100%'
            >
                <Footer />
            </Box>
        </Hide>
    </Box>
);
