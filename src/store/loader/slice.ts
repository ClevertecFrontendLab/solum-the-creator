import { createSlice } from '@reduxjs/toolkit';

type GlobalLoadingState = {
    count: number;
};

const initialState: GlobalLoadingState = {
    count: 0,
};

const globalLoadingSlice = createSlice({
    name: 'globalLoading',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.count += 1;
        },
        endLoading: (state) => {
            state.count = Math.max(0, state.count - 1);
        },
    },
});

export const { startLoading, endLoading } = globalLoadingSlice.actions;

export default globalLoadingSlice.reducer;
