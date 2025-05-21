import { createApi } from '@reduxjs/toolkit/query/react';

import { SignUpRequest, SignUpResponse } from '~/types/auth';

import { rawBaseQuery } from '../base-query-with-reauth';
import { ApiEndpoints } from '../constants/api';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: rawBaseQuery,

    endpoints: (builder) => ({
        login: builder.mutation<
            { statusText: string; message: string } & { accessToken?: string },
            { login: string; password: string }
        >({
            query: (body) => ({
                url: ApiEndpoints.AUTH_LOGIN,
                method: 'POST',
                body,
            }),
            transformResponse: (baseResponse, meta) => {
                const token = meta?.response?.headers?.get('Authentication-Access');

                return {
                    ...(baseResponse as { statusText: string; message: string }),
                    accessToken: token ?? undefined,
                };
            },
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
        forgotPassword: builder.mutation<void, { email: string }>({
            query: (body) => ({
                url: ApiEndpoints.AUTH_FORGOT_PASSWORD,
                method: 'POST',
                body,
            }),
        }),
        verifyOtp: builder.mutation<void, { email: string; otpToken: string }>({
            query: (body) => ({
                url: ApiEndpoints.AUTH_VERIFY_OTP,
                method: 'POST',
                body,
            }),
        }),
        resetPassword: builder.mutation<
            void,
            { email: string; login: string; password: string; passwordConfirm: string }
        >({
            query: (body) => ({
                url: ApiEndpoints.AUTH_RESET_PASSWORD,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useCheckAuthQuery,
    useSignUpMutation,
    useForgotPasswordMutation,
    useVerifyOtpMutation,
    useResetPasswordMutation,
} = authApi;
