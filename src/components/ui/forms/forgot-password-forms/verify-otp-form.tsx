import { Heading, HStack, Image, PinInput, PinInputField, Text, VStack } from '@chakra-ui/react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { useRef, useState } from 'react';

import modalImg from '~/assets/images/scatches/verify-otp.png';
import { HttpStatusCodes } from '~/constants/data/http-status';
import { useGlobalLoading } from '~/hooks/use-global-loading';
import { useVerifyOtpMutation } from '~/query/services/auth';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

type VerifyOtpFormProps = {
    email: string;
    onSuccess: () => void;
};

export const VerifyOtpForm: React.FC<VerifyOtpFormProps> = ({ email, onSuccess }) => {
    const dispatch = useAppDispatch();
    const [code, setCode] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const pinRef = useRef<HTMLDivElement>(null);

    const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

    useGlobalLoading(isLoading);

    const handleChange = (val: string) => {
        if (isError) setIsError(false);
        setCode(val);
    };

    const handleComplete = async (value: string) => {
        try {
            await verifyOtp({ email, otpToken: value }).unwrap();
            onSuccess();
        } catch (err) {
            const error = err as FetchBaseQueryError;

            setCode('');
            setTimeout(() => {
                pinRef.current?.querySelector('input')?.focus();
            }, 0);

            if (error.status === HttpStatusCodes.FORBIDDEN) {
                setIsError(true);
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
                alt='Man sitting'
                w='100%'
                h='100%'
                objectFit='cover'
                maxW={{ base: '6.75rem', md: '12.875rem' }}
            />

            <VStack spacing={6}>
                <VStack spacing={4}>
                    {isError && (
                        <Heading as='h2' fontSize='2xl' textAlign='center' fontWeight='700'>
                            Неверный код
                        </Heading>
                    )}
                    <Text fontSize='md' color='blackAlpha.900' textAlign='center'>
                        Мы отправили вам на e-mail
                        <br />
                        <b>{email}</b>
                        <br />
                        шестизначный код. Введите его ниже.
                    </Text>

                    <HStack spacing={1.5} ref={pinRef}>
                        <PinInput
                            otp={true}
                            value={code}
                            onChange={handleChange}
                            isInvalid={isError}
                            onComplete={handleComplete}
                        >
                            {Array.from({ length: 6 }).map((_, index) => (
                                <PinInputField
                                    key={index}
                                    data-test-id={`verification-code-input-${index + 1}`}
                                />
                            ))}
                        </PinInput>
                    </HStack>
                </VStack>

                <Text fontSize='xs' color='blackAlpha.600' textAlign='center'>
                    Не пришло письмо? Проверьте папку Спам.
                </Text>
            </VStack>
        </VStack>
    );
};
