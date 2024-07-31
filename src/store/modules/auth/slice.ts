// store/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../auth/types';
import { RootState } from '../../store';

const initialState: AuthState = {
  user: null,
  token: null,
  name: null,
  email: null,
  role: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, name, email, token, role },
      }: PayloadAction<{ user: string; name: string; email: string; token: string; role: string | null }>,
    ) => {
      state.user = user
      state.name = name
      state.email = email
      state.token = token
      state.role = role
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.name = null;
      state.email = null;
      state.role = null;
      state.isAuthenticated = false; 
    }
  },
})

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

