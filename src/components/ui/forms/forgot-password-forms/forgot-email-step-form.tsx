import { Button, Image, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { useForm } from 'react-hook-form';

import modalImg from '~/assets/images/scatches/breakfast.png';
import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { HttpStatusCodes } from '~/constants/data/http-status';
import { forgotEmailModalText, noEmailArrivedText } from '~/constants/texts/modals';
import {
    notificationEmailNotExists,
    notificationServerError,
} from '~/constants/texts/notifications';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useForgotPasswordMutation } from '~/query/services/auth';
import { useAppDispatch } from '~/store/hooks';
import { addNotification, clearNotifications } from '~/store/notification/slice';

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
        setValue,
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

            setValue('email', '');
            if (error.status === HttpStatusCodes.FORBIDDEN) {
                dispatch(
                    addNotification({
                        title: notificationEmailNotExists.title,
                        description: notificationEmailNotExists.description,
                    }),
                );

                setError('email', { type: 'server' });
                return;
            }

            dispatch(clearNotifications());
            dispatch(
                addNotification({
                    title: notificationServerError.title,
                    description: notificationServerError.description,
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
                {forgotEmailModalText}
            </Text>

            <VStack as='form' spacing={6} w='100%' onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    label='Ваш e-mail'
                    type='email'
                    placeholder='e-mail'
                    {...register('email')}
                    error={errors.email}
                    data-test-id='email-input'
                />

                <Button
                    type='submit'
                    variant='black'
                    size='lg'
                    w='100%'
                    isLoading={isLoading}
                    data-test-id='submit-button'
                >
                    Получить код
                </Button>

                <Text fontSize='xs' color='blackAlpha.600' textAlign='center'>
                    {noEmailArrivedText}
                </Text>
            </VStack>
        </VStack>
    );
};
