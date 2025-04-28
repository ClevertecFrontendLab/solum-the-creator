import { Flex, Spacer } from '@chakra-ui/react';

import { PrescribeButton } from '~/components/shared/buttons/menu-button/prescribe-button';
import { ProfileNotification } from '~/components/ui/profile-notification/profile-notification';

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
