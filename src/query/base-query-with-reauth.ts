import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

import { HttpStatusCodes } from '~/constants/data/http-status';
import { logout, setAccessToken } from '~/store/auth/slice';

import { rawBaseQuery } from './base-query';
import { ApiEndpoints } from './constants/api';

const mutex = new Mutex();

export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    let result = await rawBaseQuery(args, api, extraOptions);

    const newAccessToken = result.meta?.response?.headers?.get('Authentication-Access');
    if (newAccessToken) {
        api.dispatch(setAccessToken(newAccessToken));
    }

    if (result.error?.status === HttpStatusCodes.UNAUTHORIZED) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshResult = await rawBaseQuery(
                    { url: ApiEndpoints.AUTH_REFRESH, credentials: 'include' },
                    api,
                    extraOptions,
                );
                const refreshedToken =
                    refreshResult.meta?.response?.headers?.get('Authentication-Access');

                if (refreshedToken) {
                    api.dispatch(setAccessToken(refreshedToken));
                    result = await rawBaseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(logout());
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await rawBaseQuery(args, api, extraOptions);
        }
    }

    return result;
};
