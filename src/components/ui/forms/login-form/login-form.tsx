import { Button, Text, VStack } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router';

import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { useLoginMutation } from '~/query/services/auth';

export const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [loginMutation, { isLoading }] = useLoginMutation();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await loginMutation({ login, password }).unwrap();
            console.log('Успешный вход:', response.message);
        } catch (err) {
            console.error('Ошибка входа:', err);
        }
    };

    return (
        <VStack as='form' w='100%' onSubmit={handleSubmit}>
            <VStack w='100%' spacing={6}>
                <FormInput
                    label='Логин для входа на сайт'
                    type='text'
                    placeholder='Введите логин'
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />

                <FormInput
                    label='Пароль'
                    type='password'
                    placeholder='Пароль для сайта'
                    showPasswordToggle={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </VStack>

            <VStack w='100%' spacing={4} mt='7rem'>
                <Button type='submit' variant='black' w='100%' size='lg' isLoading={isLoading}>
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
};
