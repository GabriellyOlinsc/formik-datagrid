import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './modules/auth/slice'
import { api } from "../services/api";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
    auth: authReducer,
    [api.reducerPath]: api.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware: any) => 
        getDefaultMiddleware().concat(api.middleware)
})

const Persistor = persistStore(store)

export {Persistor}; 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store