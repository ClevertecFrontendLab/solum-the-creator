import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { addNotification } from '~/store/notification/slice';

import { API_BASE_URL } from './constants/api';

const rawBaseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
});

export const baseQueryWithErrorNotification: BaseQueryFn = async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);

    const method = typeof args === 'object' && 'method' in args ? args.method : 'GET';

    if (result.error && method === 'GET') {
        api.dispatch(
            addNotification({
                id: Date.now().toString(),
                title: 'Ошибка сервера',
                description: 'Попробуйте поискать снова попозже',
            }),
        );
    }

    return result;
};
