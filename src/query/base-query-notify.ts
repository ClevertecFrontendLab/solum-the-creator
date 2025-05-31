import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import { HttpStatusCodes } from '~/constants/data/http-status';
import { notificationServerErrorNotFound } from '~/constants/texts/notifications';
import { addNotification } from '~/store/notification/slice';

import { baseQueryWithReauth } from './base-query-with-reauth';

export const baseQueryWithReauthAndNotify: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQueryWithReauth(args, api, extraOptions);

    const method = typeof args === 'object' && 'method' in args ? args.method : 'GET';
    if (result.error && method === 'GET' && result.error.status !== HttpStatusCodes.FORBIDDEN) {
        api.dispatch(
            addNotification({
                title: notificationServerErrorNotFound.title,
                description: notificationServerErrorNotFound.description,
            }),
        );
    }

    return result;
};
