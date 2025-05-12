import {
    Box,
    Grid,
    GridItem,
    Image,
    Tab,
    TabList,
    Tabs,
    Text,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { Link, Outlet } from 'react-router';

import authImage from '~/assets/images/auth-image.jpg';
import { pathes } from '~/constants/navigation/pathes';

import { Logo, LogoSize } from '../shared/misc/logo/logo';

export const AuthLayout = () => {
    const showImage = useBreakpointValue({ base: false, md: true });
    const logoSize = useBreakpointValue<LogoSize>({ base: 'md', md: 'lg' });

    return (
        <Grid
            templateColumns={{
                base: '1fr',
                md: 'minmax(30rem, 49%) minmax(0, 1fr)',
            }}
            minH='100vh'
            w='100%'
            bgGradient='linear(230deg, #eafec7 0%, #eafec7 29.89%, #75b374 100%)'
        >
            <GridItem
                display='flex'
                flexDirection='column'
                alignItems='start'
                justifyContent='space-between'
                px={{ base: 4, sm: 5 }}
                pt={{ base: '4.5rem', sm: '8.75rem', md: '10.625rem' }}
                pb={{ base: 4, sm: 5 }}
            >
                <VStack
                    alignSelf='center'
                    spacing={{ base: '2.5rem', sm: '3.5rem', md: '5rem' }}
                    w='100%'
                    maxW={{ base: '100%', sm: '22.25rem', md: '28.25rem', '2xl': '28.875rem' }}
                >
                    <Logo isFull={true} responsive={false} size={logoSize} to={pathes.login} />
                    <VStack w='100%' spacing={10}>
                        <Tabs w='100%' variant='auth'>
                            <TabList>
                                <Tab as={Link} to={pathes.login}>
                                    Вход на сайт
                                </Tab>

                                <Tab as={Link} to={pathes.signUp}>
                                    <Box>Регистрация</Box>
                                </Tab>
                            </TabList>
                        </Tabs>
                        <Outlet />
                    </VStack>
                </VStack>
                <Box as='footer' p={2.5}>
                    <Text fontSize='sm' fontWeight={600}>
                        Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                    </Text>
                </Box>
            </GridItem>

            {showImage && (
                <GridItem
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    minW={0}
                    h='100vh'
                >
                    <Image
                        src={authImage}
                        alt='Food on table'
                        objectFit='cover'
                        w='100%'
                        h='100%'
                    />

                    <Text
                        position='absolute'
                        bottom={5}
                        right={5}
                        p={2.5}
                        fontSize='sm'
                        fontWeight={600}
                        zIndex={1}
                    >
                        ̶ Лучший сервис для ваших кулинарных побед
                    </Text>
                </GridItem>
            )}
        </Grid>
    );
};
