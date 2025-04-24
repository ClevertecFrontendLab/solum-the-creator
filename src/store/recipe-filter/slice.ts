import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Option } from '~/components/ui/selects/multi-select-menu/multi-select-menu';

type RecipeFilterState = {
    categories: Option[];
    authors: Option[];
    meatTypes: Option[];
    sideTypes: Option[];
    excludeAllergens: boolean;
    allergens: Option[];
};

const initialState: RecipeFilterState = {
    categories: [],
    authors: [],
    meatTypes: [],
    sideTypes: [],
    excludeAllergens: false,
    allergens: [],
};

const recipeFilterSlice = createSlice({
    name: 'recipeFilter',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<Option[]>) => {
            state.categories = action.payload;
        },
        setAuthors: (state, action: PayloadAction<Option[]>) => {
            state.authors = action.payload;
        },
        setMeatTypes: (state, action: PayloadAction<Option[]>) => {
            state.meatTypes = action.payload;
        },
        setSideTypes: (state, action: PayloadAction<Option[]>) => {
            state.sideTypes = action.payload;
        },
        setExcludeAllergens: (state, action: PayloadAction<boolean>) => {
            state.excludeAllergens = action.payload;
        },
        setAllergens: (state, action: PayloadAction<Option[]>) => {
            state.allergens = action.payload;
        },
        clearFilters: () => initialState,
    },
});

export const {
    setCategories,
    setAuthors,
    setMeatTypes,
    setSideTypes,
    setExcludeAllergens,
    setAllergens,
    clearFilters,
} = recipeFilterSlice.actions;

export default recipeFilterSlice.reducer;
