import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  password: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
    updateDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {
  updateFirstName,
  updateLastName,
  updateDateOfBirth,
  updateEmail,
  updatePassword,
} = registerSlice.actions;

export default registerSlice.reducer;