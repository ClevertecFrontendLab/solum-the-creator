import { Button, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { useLoginMutation } from '~/query/services/auth';

import { LoginFormValues, loginSchema } from './login-schema';

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const [loginMutation, { isLoading }] = useLoginMutation();

    const onSubmit = async (data: LoginFormValues) => {
        try {
            const response = await loginMutation(data).unwrap();
            console.log('Успешный вход:', response.message);
        } catch (err) {
            console.error('Ошибка входа:', err);
        }
    };

    return (
        <VStack as='form' w='100%' onSubmit={handleSubmit(onSubmit)}>
            <VStack w='100%' spacing={6}>
                <FormInput
                    label='Логин для входа на сайт'
                    type='text'
                    placeholder='Введите логин'
                    {...register('login')}
                    error={errors.login}
                />

                <FormInput
                    label='Пароль'
                    type='password'
                    placeholder='Пароль для сайта'
                    showPasswordToggle={true}
                    {...register('password')}
                    error={errors.password}
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
