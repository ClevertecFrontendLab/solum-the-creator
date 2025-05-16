import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { LoginForm } from '~/components/ui/forms/login-form/login-form';
import { pathes } from '~/constants/navigation/pathes';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

export const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const hasNotifiedRef = useRef(false);

    useEffect(() => {
        if (location.state?.emailVerified && !hasNotifiedRef.current) {
            hasNotifiedRef.current = true;

            dispatch(addNotification({ title: 'Верификация прошла успешно', type: 'success' }));

            navigate(pathes.login, { replace: true, state: null });
        }
    }, [location, navigate, dispatch]);

    return <LoginForm />;
};
