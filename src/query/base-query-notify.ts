import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { notificationServerError } from '~/constants/texts/notifications';
import { addNotification } from '~/store/notification/slice';

import { baseQueryWithReauth } from './base-query-with-reauth';

export const baseQueryWithReauthAndNotify: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQueryWithReauth(args, api, extraOptions);

    const method = typeof args === 'object' && 'method' in args ? args.method : 'GET';
    if (result.error && method === 'GET' && result.error.status !== 401) {
        api.dispatch(
            addNotification({
                title: notificationServerError.title,
                description: notificationServerError.description,
            }),
        );
    }

    return result;
};
