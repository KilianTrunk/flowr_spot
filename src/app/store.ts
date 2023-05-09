import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import flowersReducer from '../features/flowers/flowersSlice';
import registerReducer from '../features/register/registerSlice';
import loginReducer from '../features/login/loginSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    flowers: flowersReducer,
    register: registerReducer,
    login: loginReducer,
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
