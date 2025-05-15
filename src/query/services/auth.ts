import { createApi } from '@reduxjs/toolkit/query/react';

import { SignUpRequest, SignUpResponse } from '~/types/auth';

import { baseQueryWithReauth } from '../base-query-with-reauth';
import { ApiEndpoints } from '../constants/api';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        login: builder.mutation<
            { statusText: string; message: string },
            { login: string; password: string }
        >({
            query: (body) => ({
                url: ApiEndpoints.AUTH_LOGIN,
                method: 'POST',
                body,
            }),
        }),
        checkAuth: builder.query<{ statusText: string; message: string }, void>({
            query: () => ({ url: ApiEndpoints.AUTH_CHECK_AUTH, method: 'GET' }),
        }),
        signUp: builder.mutation<SignUpResponse, SignUpRequest>({
            query: (body) => ({
                url: ApiEndpoints.AUTH_SIGNUP,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginMutation, useCheckAuthQuery, useSignUpMutation } = authApi;
