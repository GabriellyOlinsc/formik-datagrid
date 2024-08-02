import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../auth/types';
import { RootState } from '../../store';

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: string; token: string }>,
    ) => {
      state.user = user
      state.token = token
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false; 
    }
  },
})

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

