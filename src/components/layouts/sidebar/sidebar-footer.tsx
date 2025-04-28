import { Button, Flex, Icon, Text } from '@chakra-ui/react';

import ExitIcon from '~/assets/icons/exit-icon.svg?react';

export const SidebarFooter: React.FC = () => (
    <Flex as='footer' direction='column' gap={4} px={6} pt={2} pb={8}>
        <Text fontSize='xs' color='blackAlpha.400' fontWeight='500'>
            Версия программы 03.25
        </Text>
        <Text fontSize='xs' color='blackAlpha.700' fontWeight='400' lineHeight='short'>
            Все права защищены, ученический файл, <br />
            ©Клевер Технолоджи, 2025
        </Text>

        <Button
            size='xs'
            leftIcon={<Icon as={ExitIcon} />}
            iconSpacing={1.5}
            variant='clear'
            alignSelf='flex-start'
            p={0}
        >
            Выйти
        </Button>
    </Flex>
);
