import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { VerifyErrorModal } from '~/components/modals/verify-error-modal';
import { SignUpForm } from '~/components/ui/forms/sign-up-form/sign-up-form';

export const SignUpPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        isOpen: isVerifyErrorOpen,
        onOpen: onVerifyErrorOpen,
        onClose: onVerifyErrorClose,
    } = useDisclosure();

    useEffect(() => {
        if (location.state?.emailVerifyFailed) {
            onVerifyErrorOpen();

            navigate(location.pathname, { replace: true, state: null });
        }
    }, [location, navigate, onVerifyErrorOpen]);

    return (
        <>
            <SignUpForm />
            <VerifyErrorModal isOpen={isVerifyErrorOpen} onClose={onVerifyErrorClose} />
        </>
    );
};
