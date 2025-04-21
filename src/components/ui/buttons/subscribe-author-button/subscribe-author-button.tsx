import { Button, Icon } from '@chakra-ui/react';

import SubscribeIcon from '~/assets/icons/subscribe-icon.svg?react';

export const SubscribeAuthorButton = () => (
    <Button variant='black' size='xs' leftIcon={<Icon as={SubscribeIcon} />}>
        Подписаться
    </Button>
);
