import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi } from '~/query/services/auth';
import { getUserIdFromJwt } from '~/utils/jwt-decode';

type AuthState = {
    accessToken: string | null;
    userId: string | null;
};

const initialState: AuthState = {
    accessToken: localStorage.getItem('accessToken'),
    userId: localStorage.getItem('userId'),
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
            localStorage.setItem('accessToken', action.payload);

            const userId = getUserIdFromJwt(action.payload);

            if (userId) {
                state.userId = userId;
                localStorage.setItem('userId', userId);
            }
        },
        logout: (state) => {
            state.accessToken = null;
            localStorage.removeItem('accessToken');
            state.userId = null;
            localStorage.removeItem('userId');
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            if (payload.accessToken) {
                state.accessToken = payload.accessToken;
                localStorage.setItem('accessToken', payload.accessToken);

                const userId = getUserIdFromJwt(payload.accessToken);

                if (userId) {
                    state.userId = userId;
                    localStorage.setItem('userId', userId);
                }
            }
        });
    },
});

export const { setAccessToken, logout } = authSlice.actions;
export default authSlice.reducer;
