import { Box, Button, Flex, Progress, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { SignupSuccessModal } from '~/components/modals/signup-success-modal';
import { FormInput } from '~/components/shared/inputs/form-input/form-input';
import { HttpStatusCodes } from '~/constants/data/http-status';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useSignUpMutation } from '~/query/services/auth';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';
import { AuthError } from '~/types/auth';

import { SignUpFormValues, signUpSchema } from './sign-up-schema';

export const SignUpForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        getValues,
        trigger,
        watch,
        formState: { errors },
    } = useForm<SignUpFormValues>({ resolver: zodResolver(signUpSchema), mode: 'onChange' });

    const [signUpMutation, { isLoading }] = useSignUpMutation();
    const {
        isOpen: isSignupModalOpen,
        onOpen: onSignupModalOpen,
        onClose: onSignupModalClose,
    } = useDisclosure();

    useGlobalLoading(isLoading);

    const [step, setStep] = useState(1);

    const totalFields = 6;
    const values = watch();

    const validFields = Object.entries(values).filter(
        ([key, value]) => value?.toString().trim() !== '' && !errors[key as keyof typeof errors],
    ).length;

    const progress = Math.round((validFields / totalFields) * 100);
    const progressLabel = step === 1 ? 'Шаг 1. Личная информация' : 'Шаг 2. Логин и пароль';

    const onNext = async () => {
        const isValid = await trigger(['firstName', 'lastName', 'email']);
        if (isValid) {
            setStep(step + 1);
        }
    };

    const onSubmit = async (data: SignUpFormValues) => {
        try {
            await signUpMutation(data).unwrap();
            onSignupModalOpen();
        } catch (err) {
            const error = err as AuthError;

            if (error.status === HttpStatusCodes.BAD_REQUEST) {
                dispatch(addNotification({ title: error.data.message }));
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
        <VStack
            as='form'
            w='100%'
            spacing={6}
            onSubmit={handleSubmit(onSubmit)}
            data-test-id='sign-up-form'
        >
            <Box w='100%'>
                <Text fontSize='md'>{progressLabel}</Text>
                <Progress
                    value={progress}
                    hasStripe={true}
                    size='sm'
                    colorScheme='lime'
                    bgColor='blackAlpha.100'
                    w='100%'
                    data-test-id='sign-up-progress'
                />
            </Box>

            {step === 1 && (
                <>
                    <FormInput
                        label='Ваше имя'
                        placeholder='Имя'
                        {...register('firstName')}
                        error={errors.firstName}
                        data-test-id='first-name-input'
                    />
                    <FormInput
                        label='Ваша фамилия'
                        placeholder='Фамилия'
                        {...register('lastName')}
                        error={errors.lastName}
                        data-test-id='last-name-input'
                    />
                    <FormInput
                        label='Ваш e-mail'
                        placeholder='e-mail'
                        type='email'
                        {...register('email')}
                        error={errors.email}
                        data-test-id='email-input'
                    />
                    <Button
                        w='100%'
                        mt={6}
                        size='lg'
                        variant='black'
                        onClick={onNext}
                        data-test-id='submit-button'
                    >
                        Далее
                    </Button>
                </>
            )}

            {step === 2 && (
                <>
                    <FormInput
                        label='Логин для входа на сайт'
                        placeholder='Введите логин'
                        helperText='Логин не менее 5 символов, только латиница'
                        {...register('login')}
                        error={errors.login}
                        data-test-id='login-input'
                    />
                    <FormInput
                        label='Пароль'
                        placeholder='Введите пароль'
                        helperText='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                        type='password'
                        showPasswordToggle={true}
                        {...register('password')}
                        error={errors.password}
                        data-test-id='password-input'
                    />
                    <FormInput
                        label='Повторите пароль'
                        placeholder='Введите пароль повторно'
                        type='password'
                        showPasswordToggle={true}
                        {...register('confirmPassword')}
                        error={errors.confirmPassword}
                        data-test-id='confirm-password-input'
                    />
                    <Flex direction={{ base: 'column', sm: 'row' }} w='100%' gap={4} mt={6}>
                        <Button
                            w='100%'
                            type='submit'
                            variant='black'
                            size='lg'
                            data-test-id='submit-button'
                        >
                            Зарегистрироваться
                        </Button>
                    </Flex>
                </>
            )}

            <SignupSuccessModal
                email={getValues().email}
                isOpen={isSignupModalOpen}
                onClose={onSignupModalClose}
            />
        </VStack>
    );
};
