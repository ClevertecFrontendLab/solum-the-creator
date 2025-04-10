import { Flex } from '@chakra-ui/react';

import { ProfileNotification } from '~/components/profile-notification/profile-notification';

export const HomePage = () => (
    <>
        <Flex>
            <ProfileNotification direction='column' size='md' />
        </Flex>
    </>
);
