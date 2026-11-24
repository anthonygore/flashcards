import { configureStore, type Action, type ThunkAction } from '@reduxjs/toolkit';
import flashcardsSlice from './flashcards/flashcardsSlice';

export const store = configureStore({
  reducer: {
    flashcards: flashcardsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>