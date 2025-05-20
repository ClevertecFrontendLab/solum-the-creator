import { ModalBody } from '@chakra-ui/react';
import { useState } from 'react';

import { ForgotEmailStepForm } from '~/components/ui/forms/forgot-password-forms/forgot-email-step-form';
import { ResetPasswordForm } from '~/components/ui/forms/forgot-password-forms/reset-password-form';
import { VerifyOtpForm } from '~/components/ui/forms/forgot-password-forms/verify-otp-form';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

import { ModalContainer } from '../modal-container';

type ForgotPasswordModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

type ModalStep = 'email' | 'code' | 'password';

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
    const dispatch = useAppDispatch();
    const [step, setStep] = useState<ModalStep>('email');
    const [email, setEmail] = useState('');

    const handleEmailSuccess = (value: string) => {
        setEmail(value);
        setStep('code');
    };

    const handleCodeSuccess = () => {
        setStep('password');
    };

    const handlePasswordSuccess = () => {
        onClose();
        dispatch(
            addNotification({
                type: 'success',
                title: 'Восстановление данных успешно',
                position: 'bottom-left',
            }),
        );
    };

    return (
        <ModalContainer isOpen={isOpen} onClose={onClose}>
            <ModalBody p={0}>
                {step === 'email' && <ForgotEmailStepForm onSuccess={handleEmailSuccess} />}
                {step === 'code' && <VerifyOtpForm email={email} onSuccess={handleCodeSuccess} />}
                {step === 'password' && (
                    <ResetPasswordForm email={email} onSuccess={handlePasswordSuccess} />
                )}
            </ModalBody>
        </ModalContainer>
    );
};
