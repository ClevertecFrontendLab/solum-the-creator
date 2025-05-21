import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';

export const VerificationHandler = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const verified = params.get('emailVerified');

        if (verified === 'true') {
            navigate(pathes.login, { replace: true, state: { emailVerified: true } });
        } else {
            navigate(pathes.signUp, { replace: true, state: { emailVerifyFailed: true } });
        }
    }, [params, navigate]);

    return null;
};
