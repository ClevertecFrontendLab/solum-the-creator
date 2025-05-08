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
    isFilterActive: boolean;
    appliedFilterVersion: number;
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
    isFilterActive: false,
    appliedFilterVersion: 0,
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
        setAppliedAllergensFilter(state, action: PayloadAction<string[]>) {
            state.appliedFilters.allergens = action.payload;
        },
        setAppliedExcludeAllergensFilter(state, action: PayloadAction<boolean>) {
            state.appliedFilters.excludeAllergens = action.payload;

            if (!action.payload) {
                state.appliedFilters.allergens = [];
            }
        },
        resetFilters(state) {
            state.draftFilters = initialFilters;
            state.appliedFilters = initialFilters;
            state.isFilterActive = false;
        },
        resetDraftFilters(state) {
            state.draftFilters = initialFilters;
        },
        applyFilters(state) {
            state.isFilterActive = true;
            state.appliedFilters = state.draftFilters;
            state.appliedFilterVersion += 1;
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
    setAppliedAllergensFilter,
    setAppliedExcludeAllergensFilter,
    resetDraftFilters,
} = recipesFiltersSlice.actions;

export default recipesFiltersSlice.reducer;
