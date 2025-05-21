import { Button, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { AuthErrorModal } from '~/components/modals/auth-error-modal';
import { ForgotPasswordModal } from '~/components/modals/forgot-password-modal/forgot-password-modal';
import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { HttpStatusCodes } from '~/constants/data/http-status';
import { pathes } from '~/constants/navigation/pathes';
import {
    notificationEmailNotVerified,
    notificationWrongCredentials,
} from '~/constants/texts/notifications';
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
    const {
        isOpen: isForgotModalOpen,
        onOpen: onForgotModalOpen,
        onClose: onForgotModalClose,
    } = useDisclosure();

    const [loginMutation, { isLoading }] = useLoginMutation();

    const {
        isOpen: isErrorModalOpen,
        onOpen: onErrorModalOpen,
        onClose: onErrorModalClose,
    } = useDisclosure();

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
                        title: notificationWrongCredentials.title,
                        description: notificationWrongCredentials.description,
                        position: 'bottom-left',
                    }),
                );
                return;
            }

            if (error.status === HttpStatusCodes.FORBIDDEN) {
                dispatch(
                    addNotification({
                        title: notificationEmailNotVerified.title,
                        description: notificationEmailNotVerified.description,
                        position: 'bottom-left',
                    }),
                );
                return;
            }

            onErrorModalOpen();
        }
    };

    const handleRetry = () => {
        handleSubmit(onSubmit)();
        onErrorModalClose();
    };

    return (
        <>
            <VStack
                as='form'
                w='100%'
                onSubmit={handleSubmit(onSubmit)}
                data-test-id='sign-in-form'
            >
                <VStack w='100%' spacing={6}>
                    <FormInput
                        label='Логин для входа на сайт'
                        type='text'
                        placeholder='Введите логин'
                        {...register('login')}
                        error={errors.login}
                        data-test-id='login-input'
                    />

                    <FormInput
                        label='Пароль'
                        type='password'
                        placeholder='Пароль для сайта'
                        showPasswordToggle={true}
                        {...register('password')}
                        error={errors.password}
                        data-test-id='password-input'
                    />
                </VStack>

                <VStack w='100%' spacing={4} mt='7rem'>
                    <Button
                        type='submit'
                        variant='black'
                        w='100%'
                        size='lg'
                        isLoading={isLoading}
                        data-test-id='submit-button'
                    >
                        Войти
                    </Button>

                    <Button
                        variant='clear'
                        w='100%'
                        size='lg'
                        onClick={onForgotModalOpen}
                        data-test-id='forgot-password'
                    >
                        <Text as='span' fontWeight={600}>
                            Забыли логин или пароль?
                        </Text>
                    </Button>
                </VStack>

                <AuthErrorModal
                    isOpen={isErrorModalOpen}
                    onClose={onErrorModalClose}
                    onRetry={handleRetry}
                />
            </VStack>
            <ForgotPasswordModal isOpen={isForgotModalOpen} onClose={onForgotModalClose} />
        </>
    );
};
