import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';
import { useAppDispatch } from '~/store/hooks';
import { addNotification } from '~/store/notification/slice';

export const RecipeError: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const hasShownNotification = useRef(false);

    useEffect(() => {
        if (!hasShownNotification.current) {
            dispatch(
                addNotification({
                    id: Date.now().toString(),
                    title: 'Ошибка сервера',
                    description: 'Попробуйте немного позже',
                }),
            );
            hasShownNotification.current = true;
        }

        const from = (location.state as { from?: string })?.from;
        if (from) {
            navigate(from, { replace: true });
        } else {
            navigate(pathes.home, { replace: true });
        }
    }, [dispatch, navigate, location.state]);

    return null;
};
