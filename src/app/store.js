import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from "../features/UserSlice";

import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session';


const rootReducer = combineReducers({
    user: userReducer
})

const persistConfig = {
    key: 'root',
    storage: storageSession,
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export const persistor = persistStore(store);