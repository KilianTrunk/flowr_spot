import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  email: string;
  password: string;
}

const initialState: LoginState = {
  email: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    updatePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    resetLoginState(state) {
      state.email = '';
      state.password = '';
    },
  },
});

export const { updateEmail, updatePassword, resetLoginState } = loginSlice.actions;

export default loginSlice.reducer;
