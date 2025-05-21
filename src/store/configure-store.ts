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
import { authApi } from '~/query/services/auth';

import appReducer, { appSlice } from './app-slice';
import authReducer from './auth/slice';
import categoriesReducer from './category/slice';
import globalLoadingReducer from './loader/slice';
import notificationReducer from './notification/slice';
import recipesFiltersReducer from './recipes-filters/slice';

const isProduction = false;

const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    categories: categoriesReducer,
    globalLoading: globalLoadingReducer,
    notification: notificationReducer,
    recipesFilters: recipesFiltersReducer,
    auth: authReducer,
});

const persistedReducer = persistReducer(
    {
        key: 'root',
        storage,
        whitelist: ['categories', 'auth'],
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
        })
            .concat(apiSlice.middleware)
            .concat(authApi.middleware),
    devTools: !isProduction,
});

export const persistor = persistStore(store);

export type ApplicationState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
