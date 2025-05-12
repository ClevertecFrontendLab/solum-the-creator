import { Button, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router';

import { FormInput } from '~/components/shared/inputs/form-input/form-input';

export const LoginPage = () => (
    <VStack as='form' w='100%'>
        <VStack w='100%' spacing={6}>
            <FormInput label='Логин для входа на сайт' type='text' placeholder='Введите логин' />

            <FormInput
                label='Пароль'
                type='password'
                placeholder='Пароль для сайта'
                showPasswordToggle={true}
            />
        </VStack>

        <VStack w='100%' spacing={4} mt='7rem'>
            <Button type='submit' variant='black' w='100%' size='lg'>
                Войти
            </Button>

            <Link to='#'>
                <Text as='span' fontWeight={600}>
                    Забыли логин или пароль?
                </Text>
            </Link>
        </VStack>
    </VStack>
);
