import { Button, Image, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { useForm } from 'react-hook-form';

import modalImg from '~/assets/images/scatches/breakfast.png';
import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { HttpStatusCodes } from '~/constants/data/http-status';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useForgotPasswordMutation } from '~/query/services/auth';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

import { ForgotEmailFormValues, forgotEmailSchema } from './forgot-email-schema';

type ForgotEmailStepFormProps = {
    onSuccess: (value: string) => void;
};

export const ForgotEmailStepForm: React.FC<ForgotEmailStepFormProps> = ({ onSuccess }) => {
    const dispatch = useAppDispatch();
    const [forgotPasswordMutation, { isLoading }] = useForgotPasswordMutation();

    useGlobalLoading(isLoading);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<ForgotEmailFormValues>({
        resolver: zodResolver(forgotEmailSchema),
    });

    const onSubmit = async (data: ForgotEmailFormValues) => {
        try {
            await forgotPasswordMutation(data).unwrap();
            onSuccess(data.email);
        } catch (err) {
            const error = err as FetchBaseQueryError;

            if (error.status === HttpStatusCodes.FORBIDDEN) {
                dispatch(
                    addNotification({
                        title: 'Такого e-mail нет',
                        description:
                            'Попробуйте другой e-mail или проверьте правильность его написания',
                    }),
                );
                setError('email', { type: 'server' });
                return;
            }

            dispatch(
                addNotification({
                    title: 'Ошибка сервера',
                    description: 'Попробуйте немного позже',
                }),
            );
        }
    };

    return (
        <VStack spacing={8}>
            <Image
                src={modalImg}
                alt='Breakfast'
                w='100%'
                h='100%'
                objectFit='cover'
                maxW={{ base: '6.75rem', md: '12.875rem' }}
            />

            <Text fontSize='md' color='blackAlpha.900' textAlign='center'>
                Для восстановления входа введите
                <br />
                ваш e-mail, куда можно отправить уникальный код
            </Text>

            <VStack as='form' spacing={6} w='100%' onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    label='Ваш e-mail'
                    type='email'
                    placeholder='e-mail'
                    {...register('email')}
                    error={errors.email}
                />

                <Button type='submit' variant='black' size='lg' w='100%' isLoading={isLoading}>
                    Получить код
                </Button>

                <Text fontSize='xs' color='blackAlpha.600' textAlign='center'>
                    Не пришло письмо? Проверьте папку Спам.
                </Text>
            </VStack>
        </VStack>
    );
};
