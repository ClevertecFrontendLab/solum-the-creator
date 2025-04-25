import { Box, Flex, Hide, Show, Spacer, useDisclosure } from '@chakra-ui/react';

import avatarUrl from '~/assets/images/avatar.jpg';
import { ProfileNotification } from '~/components/entities/profile-notification/profile-notification';
import { UserInfoCard } from '~/components/entities/user-info-card/user-info-card';
import { BurgerButton } from '~/components/ui/burger-button/burger-button';
import { Logo } from '~/components/ui/logo/logo';
import { Breadcrumbs } from '~/components/widgets/breadcrumbs/breadcrumbs';

import { MobileSidebar } from '../sidebar/mobile-sidebar';

export const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const bgColor = isOpen ? 'white' : 'lime.50';

    return (
        <Box
            as='header'
            bg={{ base: bgColor, md: 'lime.50' }}
            px={{ base: 4, sm: 5 }}
            py={4}
            top={0}
            width='100%'
            data-test-id='header'
        >
            <Flex h={{ base: 8, md: 12 }} alignItems='center' width='100%' gap={2}>
                <Logo isFull={true} onClick={onClose} />

                <Show above='md'>
                    <Spacer maxW={{ base: 4, md: '8rem' }} />
                    <Breadcrumbs />
                </Show>

                <Spacer />

                <Show above='md'>
                    <Box pr={{ base: 0, lg: 6, xl: 16 }}>
                        <UserInfoCard
                            avatarUrl={avatarUrl}
                            fullName='Екатерина Константинопольская'
                            userName='bake_and_pie'
                        />
                    </Box>
                </Show>

                <Hide above='md'>
                    <Flex align='center' gap={{ base: 2, sm: 4 }}>
                        {!isOpen && <ProfileNotification values={[121, 23, 49]} />}

                        <Box>
                            <BurgerButton isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                            <MobileSidebar isOpen={isOpen} onClose={onClose} />
                        </Box>
                    </Flex>
                </Hide>
            </Flex>
        </Box>
    );
};
