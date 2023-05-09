import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  firstName: '',
  lastName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;