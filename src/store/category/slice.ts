import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { categoriesApiSlice } from '~/query/services/category';
import { Category } from '~/types/category';

export const categoriesAdapter = createEntityAdapter({
    selectId: (category: Category) => category._id,
});

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: categoriesAdapter.getInitialState(),
    reducers: {
        setAllCategories: categoriesAdapter.setAll,
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            categoriesApiSlice.endpoints.getCategories.matchFulfilled,
            (state, action: PayloadAction<Category[]>) => {
                categoriesAdapter.setAll(state, action.payload);
            },
        );
    },
});

export const { setAllCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
