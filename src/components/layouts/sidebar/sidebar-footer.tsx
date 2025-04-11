import { Button, Flex, Text } from '@chakra-ui/react';

import ExitIcon from '~/assets/icons/exit-icon.svg?react';

export const SidebarFooter: React.FC = () => (
    <Flex as='footer' gap={4} pb={8} px={6} pt={2} direction='column'>
        <Text as='span' fontSize='xs' color='blackAlpha.400' fontWeight='500'>
            Версия программы 03.25
        </Text>
        <Text fontSize='xs' color='blackAlpha.700' fontWeight='400'>
            Все права защищены, ученический файл, <br />
            ©Клевер Технолоджи, 2025
        </Text>
        <Flex>
            <Button size='xs' leftIcon={<ExitIcon />} colorScheme='black' variant='ghost' px={0}>
                Выйти
            </Button>
        </Flex>
    </Flex>
);
