import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
        setLoading: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.count += 1;
            } else {
                state.count = Math.max(0, state.count - 1);
            }
        },
    },
});

export const { startLoading, endLoading, setLoading } = globalLoadingSlice.actions;

export default globalLoadingSlice.reducer;
