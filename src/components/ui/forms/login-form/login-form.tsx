import { Button, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';

import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { HttpStatusCodes } from '~/constants/data/http-status';
import { pathes } from '~/constants/navigation/pathes';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useLoginMutation } from '~/query/services/auth';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

import { LoginFormValues, loginSchema } from './login-schema';

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [loginMutation, { isLoading }] = useLoginMutation();

    useGlobalLoading(isLoading);

    const onSubmit = async (data: LoginFormValues) => {
        try {
            await loginMutation(data).unwrap();
            navigate(pathes.home);
        } catch (err) {
            const error = err as FetchBaseQueryError;

            if (error.status === HttpStatusCodes.UNAUTHORIZED) {
                dispatch(
                    addNotification({
                        title: 'Неверный логин или пароль',
                        description: 'Попробуйте снова',
                    }),
                );
            }

            if (error.status === HttpStatusCodes.FORBIDDEN) {
                dispatch(
                    addNotification({
                        title: 'E-mail не верифицирован',
                        description: 'Проверьте почту и перейдите по ссылке',
                    }),
                );
            }
        }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.trim();
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
                    onBlur={handleBlur}
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
