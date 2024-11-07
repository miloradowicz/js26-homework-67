import { configureStore } from '@reduxjs/toolkit';
import { combinationLockReducer } from '../containers/CombinationLock/combinationLockSlice';

export const store = configureStore({
  reducer: {
    combinationLock: combinationLockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
