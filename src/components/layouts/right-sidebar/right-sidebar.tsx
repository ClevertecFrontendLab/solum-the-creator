import { Flex, Spacer } from '@chakra-ui/react';

import { ProfileNotification } from '~/components/entities/profile-notification/profile-notification';
import { PrescribeButton } from '~/components/ui/buttons/menu-button/prescribe-button';

export const RightSidebar: React.FC = () => (
    <Flex
        as='aside'
        direction='column'
        h='100%'
        overflow='hidden'
        align='center'
        py={4}
        pb='3.25rem'
    >
        <ProfileNotification direction='column' size='md' values={[121, 23, 49]} />
        <Spacer />
        <PrescribeButton />
    </Flex>
);
