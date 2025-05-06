import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterParams = {
    searchString: string;
    meat: string[];
    garnish: string[];
    subcategoriesIds: string[];
    allergens: string[];
    excludeAllergens: boolean;
};

type RecipesFiltersState = {
    draftFilters: FilterParams;
    appliedFilters: FilterParams;
};

const initialFilters: FilterParams = {
    searchString: '',
    meat: [],
    garnish: [],
    subcategoriesIds: [],
    allergens: [],
    excludeAllergens: false,
};

const initialState: RecipesFiltersState = {
    draftFilters: initialFilters,
    appliedFilters: initialFilters,
};

const recipesFiltersSlice = createSlice({
    name: 'recipesFilters',
    initialState,
    reducers: {
        setSearchString(state, action: PayloadAction<string>) {
            state.draftFilters.searchString = action.payload;
        },
        setMeatFilter(state, action: PayloadAction<string[]>) {
            state.draftFilters.meat = action.payload;
        },
        setGarnishFilter(state, action: PayloadAction<string[]>) {
            state.draftFilters.garnish = action.payload;
        },
        setAllergensFilter(state, action: PayloadAction<string[]>) {
            state.draftFilters.allergens = action.payload;
        },
        setExcludeAllergensFilter(state, action: PayloadAction<boolean>) {
            state.draftFilters.excludeAllergens = action.payload;

            if (!action.payload) {
                state.draftFilters.allergens = [];
            }
        },
        setSubcategoriesIdsFilter(state, action: PayloadAction<string[]>) {
            state.draftFilters.subcategoriesIds = action.payload;
        },
        resetFilters(state) {
            state.draftFilters = initialFilters;
            state.appliedFilters = initialFilters;
        },
        applyFilters(state) {
            state.appliedFilters = state.draftFilters;
        },
        setDraftFiltersFromApplied(state) {
            state.draftFilters = state.appliedFilters;
        },
    },
});

export const {
    setSearchString,
    setMeatFilter,
    setGarnishFilter,
    setSubcategoriesIdsFilter,
    setAllergensFilter,
    setExcludeAllergensFilter,
    resetFilters,
    applyFilters,
    setDraftFiltersFromApplied,
} = recipesFiltersSlice.actions;

export default recipesFiltersSlice.reducer;
