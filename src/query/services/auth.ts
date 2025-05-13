import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReauth } from '../base-query-with-reauth';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        login: builder.mutation<
            { statusText: string; message: string },
            { login: string; password: string }
        >({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),
        checkAuth: builder.query<{ statusText: string; message: string }, void>({
            query: () => ({ url: '/auth/check-auth' }),
        }),
    }),
});

export const { useLoginMutation, useCheckAuthQuery } = authApi;
