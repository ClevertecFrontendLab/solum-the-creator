import { Box, Hide, Show } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Header } from '~/components/layouts/header';
import { useLayoutConfig } from '~/context/layout-config/use-layout-config';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useResetAllFiltersOnRouteChange } from '~/hooks/use-reset-all-filters-on-route-change';
import { useGetCategoriesQuery } from '~/query/services/category';

import { Footer } from './footer';
import { RightSidebar } from './right-sidebar/right-sidebar';
import { Sidebar } from './sidebar/sidebar';

export const MainLayout: React.FC = () => {
    const { isLoading } = useGetCategoriesQuery();
    const { showRightSidebar } = useLayoutConfig();

    useGlobalLoading(isLoading);
    useResetAllFiltersOnRouteChange();

    return (
        <Box position='relative'>
            <Box position='fixed' top={0} left={0} right={0} zIndex={8}>
                <Header />
            </Box>

            <Hide below='md'>
                <Box
                    position='fixed'
                    top={{ base: '4rem', md: '5rem' }}
                    left={0}
                    bottom={0}
                    w='16rem'
                    zIndex={1}
                    data-test-id='nav'
                >
                    <Sidebar />
                </Box>
            </Hide>

            {showRightSidebar && (
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
            )}

            <Box
                as='main'
                pt={{ base: '4rem', md: '5rem' }}
                pb={{ base: '5.25rem', md: 0 }}
                ml={{ base: 0, md: '16rem', '3xl': 'auto' }}
                mr={{ base: 0, md: '13rem', '3xl': 'auto' }}
                minH='100vh'
                overflowY='auto'
                maxW={{ base: '100%', lg: '61rem', '2xl': '88rem' }}
                display='flex'
                flexDir='column'
            >
                <Outlet />
            </Box>

            <Box
                as='footer'
                position='fixed'
                bottom={0}
                left={0}
                right={0}
                zIndex={1}
                data-test-id='footer'
                width='100%'
                display={{ base: 'block', md: 'none' }}
            >
                <Footer />
            </Box>
        </Box>
    );
};
