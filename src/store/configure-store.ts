import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { apiSlice } from '~/query/create-api';

import allergenFilterReducer from './allergen-filter/slice';
import appReducer, { appSlice } from './app-slice';
import categoriesReducer from './category/slice';
import recipeFilterReducer from './recipe-filter/slice';
import searchReducer from './search/slice';

const isProduction = false;

const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    categories: categoriesReducer,
    allergenFilter: allergenFilterReducer,
    recipeFilter: recipeFilterReducer,
    search: searchReducer,
});

const persistedReducer = persistReducer(
    {
        key: 'root',
        storage,
        whitelist: ['categories'],
    },
    rootReducer,
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(apiSlice.middleware),
    devTools: !isProduction,
});

export const persistor = persistStore(store);

export type ApplicationState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
