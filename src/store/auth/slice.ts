import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
    accessToken: string | null;
};

const initialState: AuthState = {
    accessToken: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
            localStorage.setItem('accessToken', action.payload);
        },
        logout: (state) => {
            state.accessToken = null;
            localStorage.removeItem('accessToken');
        },
    },
});

export const { setAccessToken, logout } = authSlice.actions;
export default authSlice.reducer;
