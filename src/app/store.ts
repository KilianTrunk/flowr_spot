import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import flowersReducer from '../features/flowers/flowersSlice'

export const store = configureStore({
  reducer: {
    flowers: flowersReducer,
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
