import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { ApplicationState } from '~/store/configure-store';
import { addNotification } from '~/store/notification/slice';

import { API_BASE_URL } from './constants/api';

export const rawBaseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as ApplicationState).auth.accessToken;
        if (token) headers.set('Authorization', `Bearer ${token}`);
        return headers;
    },
});

export const baseQueryWithErrorNotification: BaseQueryFn = async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);

    const method = typeof args === 'object' && 'method' in args ? args.method : 'GET';

    if (result.error && method === 'GET') {
        api.dispatch(
            addNotification({
                title: 'Ошибка сервера',
                description: 'Попробуйте поискать снова попозже',
            }),
        );
    }

    return result;
};
