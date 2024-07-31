import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './modules/auth/slice'
import { api } from "../services/api";

const roodReducer = combineReducers({
    auth: authReducer
})
export const store = configureStore({
    reducer: {
        auth: authReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware:(getDefaultMiddleware: any) => 
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store