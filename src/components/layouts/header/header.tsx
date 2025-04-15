import { Box, Flex, Spacer, useDisclosure } from '@chakra-ui/react';

import avatarUrl from '~/assets/images/avatar.jpg';
import { ProfileNotification } from '~/components/entities/profile-notification/profile-notification';
import { UserInfoCard } from '~/components/entities/user-info-card/user-info-card';
import { BurgerButton } from '~/components/ui/burger-button/burger-button';
import { Logo } from '~/components/ui/logo/logo';
import { Breadcrumbs } from '~/components/widgets/breadcrumbs/breadcrumbs';

export const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            as='header'
            bg='lime.50'
            px={{ base: 4, md: 4, sm: 5 }}
            py={4}
            top={0}
            width='100%'
            data-test-id='header'
        >
            <Flex h={{ base: 8, md: 12 }} alignItems='center' width='100%'>
                <Logo isFull={true} />

                <Spacer maxW={{ base: 0, md: 32 }} />

                <Box display={{ base: 'none', md: 'block' }}>
                    <Breadcrumbs />
                </Box>

                <Spacer />

                <Box display={{ base: 'none', md: 'block' }} pr={{ base: 0, lg: 6, xl: 16 }}>
                    <UserInfoCard
                        avatarUrl={avatarUrl}
                        fullName='Екатерина Константинопольская'
                        userName='bake_and_pie'
                    />
                </Box>

                <Flex
                    display={{ base: 'flex', md: 'none' }}
                    align='center'
                    gap={{ base: 2, sm: 4 }}
                >
                    <ProfileNotification values={[121, 23, 49]} />
                    <BurgerButton isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                </Flex>
            </Flex>
        </Box>
    );
};
