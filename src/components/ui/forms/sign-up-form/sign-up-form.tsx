import { Box, Button, Flex, Progress, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormInput } from '~/components/shared/inputs/form-input/form-input';

type SignUpFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    login: string;
    password: string;
    confirmPassword: string;
};

export const SignUpForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<SignUpFormValues>();

    const [step, setStep] = useState(1);

    const fieldFields = Object.entries(getValues()).filter(
        ([_key, value]) => value && value.toString().trim() !== '',
    ).length;

    const progress = Math.round((fieldFields / 6) * 100);
    const progressLabel = step === 1 ? 'Шаг 1. Личная информация' : 'Шаг 2. Логин и пароль';

    const onNext = () => {
        setStep(step + 1);
    };

    const onBack = () => {
        setStep(step - 1);
    };

    const onSubmit = (data: SignUpFormValues) => {
        console.log('sign up form submit:', data);
    };

    return (
        <VStack as='form' w='100%' spacing={6} onSubmit={handleSubmit(onSubmit)}>
            <Box w='100%'>
                <Text fontSize='md'>{progressLabel}</Text>
                <Progress
                    value={progress}
                    hasStripe={true}
                    size='sm'
                    colorScheme='lime'
                    bgColor='blackAlpha.100'
                    w='100%'
                />
            </Box>

            {step === 1 && (
                <>
                    <FormInput
                        label='Ваше имя'
                        placeholder='Имя'
                        {...register('firstName')}
                        error={errors.firstName}
                    />
                    <FormInput
                        label='Ваша фамилия'
                        placeholder='Фамилия'
                        {...register('lastName')}
                        error={errors.lastName}
                    />
                    <FormInput
                        label='Ваш e-mail'
                        placeholder='e-mail'
                        type='email'
                        {...register('email')}
                        error={errors.email}
                    />
                    <Button w='100%' mt={6} size='lg' variant='black' onClick={onNext}>
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
                    />
                    <FormInput
                        label='Пароль'
                        placeholder='Введите пароль'
                        helperText='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                        type='password'
                        showPasswordToggle={true}
                        {...register('password')}
                        error={errors.password}
                    />
                    <FormInput
                        label='Повторите пароль'
                        placeholder='Введите пароль повторно'
                        type='password'
                        showPasswordToggle={true}
                        {...register('confirmPassword')}
                        error={errors.confirmPassword}
                    />
                    <Flex direction={{ base: 'column', sm: 'row' }} w='100%' gap={4} mt={6}>
                        <Button
                            w={{ base: '100%', sm: '40%' }}
                            bgColor='whiteAlpha.600'
                            size='lg'
                            onClick={onBack}
                        >
                            Назад
                        </Button>
                        <Button w='100%' type='submit' variant='black' size='lg'>
                            Зарегистрироваться
                        </Button>
                    </Flex>
                </>
            )}
        </VStack>
    );
};
