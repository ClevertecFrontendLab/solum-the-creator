import { Flex } from '@chakra-ui/react';

import { PrescribeButton } from '~/components/buttons/menu-button/prescribe-button';
import { ProfileNotification } from '~/components/profile-notification/profile-notification';

export const RightSidebar: React.FC = () => (
    <Flex as='aside' direction='column' h='100%' overflow='hidden' justify='space-between'>
        <Flex direction='column' py={4} gap={6} align='center'>
            <ProfileNotification direction='column' size='md' />
        </Flex>
        <Flex direction='column' align='center' pb='52px'>
            <PrescribeButton />
        </Flex>
    </Flex>
);
