import { ModalBody } from '@chakra-ui/react';
import { useState } from 'react';

import { ForgotEmailStepForm } from '~/components/ui/forms/forgot-email-step-form/forgot-email-step-form';
import { VerifyOtpForm } from '~/components/ui/forms/forgot-email-step-form/verify-otp-form';

import { ModalContainer } from '../modal-container';

type ForgotPasswordModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

type ModalStep = 'email' | 'code' | 'password';

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<ModalStep>('email');
    const [email, setEmail] = useState('');

    const handleEmailSuccess = (value: string) => {
        setEmail(value);
        setStep('code');
    };

    const handleCodeSuccess = () => {
        setStep('password');
    };

    return (
        <ModalContainer isOpen={isOpen} onClose={onClose}>
            <ModalBody p={0}>
                {step === 'email' && <ForgotEmailStepForm onSuccess={handleEmailSuccess} />}
                {step === 'code' && <VerifyOtpForm email={email} onSuccess={handleCodeSuccess} />}
            </ModalBody>
        </ModalContainer>
    );
};
