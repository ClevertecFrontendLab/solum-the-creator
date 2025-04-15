import { Flex } from '@chakra-ui/react';

import { ProfileNotification } from '~/components/entities/profile-notification/profile-notification';
import { PrescribeButton } from '~/components/ui/buttons/menu-button/prescribe-button';

export const RightSidebar: React.FC = () => (
    <Flex as='aside' direction='column' h='100%' overflow='hidden' justify='space-between'>
        <Flex direction='column' py={4} gap={6} align='center'>
            <ProfileNotification direction='column' size='md' values={[121, 23, 49]} />
        </Flex>
        <Flex direction='column' align='center' pb='52px'>
            <PrescribeButton />
        </Flex>
    </Flex>
);
