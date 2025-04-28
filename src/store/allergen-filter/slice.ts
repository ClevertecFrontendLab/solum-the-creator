import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AllergenOption = {
    label: string;
    value: string;
};

type AllergenFilterState = {
    excludeMode: boolean;
    selectedAllergens: AllergenOption[];
};

const initialState: AllergenFilterState = {
    excludeMode: false,
    selectedAllergens: [],
};

export const allergenFilterSlice = createSlice({
    name: 'allergenFilter',
    initialState,
    reducers: {
        setExcludeMode: (state, action: PayloadAction<boolean>) => {
            state.excludeMode = action.payload;
        },
        setSelectedAllergens: (state, action: PayloadAction<AllergenOption[]>) => {
            state.selectedAllergens = action.payload;
        },
        addCustomAllergen: (state, action: PayloadAction<AllergenOption>) => {
            state.selectedAllergens.push(action.payload);
        },
        resetFilters: (state) => {
            state.excludeMode = false;
            state.selectedAllergens = [];
        },
    },
});

export const { addCustomAllergen, resetFilters, setExcludeMode, setSelectedAllergens } =
    allergenFilterSlice.actions;

export default allergenFilterSlice.reducer;
