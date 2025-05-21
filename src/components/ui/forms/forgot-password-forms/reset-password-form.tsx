import { Button, Heading, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { useForm } from 'react-hook-form';

import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { HttpStatusCodes } from '~/constants/data/http-status';
import {
    notificationLoginNotExists,
    notificationServerError,
} from '~/constants/texts/notifications';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useResetPasswordMutation } from '~/query/services/auth';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

import { resetPasswordSchema, ResetPasswordValues } from './reset-password-schema';

type ResetPasswordFormProps = {
    email: string;
    onSuccess: () => void;
};

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ email, onSuccess }) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordValues>({
        resolver: zodResolver(resetPasswordSchema),
        mode: 'onChange',
    });

    const [resetPasswordMutation, { isLoading }] = useResetPasswordMutation();

    useGlobalLoading(isLoading);

    const onSubmit = async (data: ResetPasswordValues) => {
        try {
            await resetPasswordMutation({ ...data, email }).unwrap();
            onSuccess();
        } catch (err) {
            const error = err as FetchBaseQueryError;

            if (
                error.status === HttpStatusCodes.BAD_REQUEST ||
                error.status === HttpStatusCodes.FORBIDDEN
            ) {
                dispatch(
                    addNotification({
                        title: notificationLoginNotExists.title,
                        description: notificationLoginNotExists.description,
                    }),
                );
                return;
            }

            dispatch(
                addNotification({
                    title: notificationServerError.title,
                    description: notificationServerError.description,
                }),
            );
        }
    };

    return (
        <VStack as='form' spacing={6} w='100%' onSubmit={handleSubmit(onSubmit)}>
            <Heading as='h2' textAlign='center' fontWeight='700' fontSize='2xl' maxW='90%'>
                Восстановление аккаунта
            </Heading>

            <FormInput
                label='Логин для входа на сайт'
                type='text'
                placeholder='Логин'
                helperText='Логин не менее 5 символов, только латиница'
                {...register('login')}
                error={errors.login}
                data-test-id='login-input'
            />

            <FormInput
                label='Пароль'
                placeholder='Пароль'
                helperText='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                type='password'
                showPasswordToggle={true}
                {...register('password')}
                error={errors.password}
                data-test-id='password-input'
            />
            <FormInput
                label='Повторите пароль'
                placeholder='Пароль'
                type='password'
                showPasswordToggle={true}
                {...register('passwordConfirm')}
                error={errors.passwordConfirm}
                data-test-id='confirm-password-input'
            />

            <Button
                type='submit'
                variant='black'
                size='lg'
                w='100%'
                mt={2}
                isLoading={isLoading}
                data-test-id='submit-button'
            >
                Зарегистрироваться
            </Button>
        </VStack>
    );
};
