import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { pathes } from '~/constants/navigation/pathes';
import { useAppDispatch } from '~/store/hooks';

export const RecipeError: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const from = (location.state as { from?: string })?.from;
        if (from) {
            navigate(from, { replace: true });
        } else {
            navigate(pathes.home, { replace: true });
        }
    }, [dispatch, navigate, location.state]);

    return null;
};
