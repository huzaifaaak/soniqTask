import {configureStore} from '@reduxjs/toolkit';
import {commentSlice} from './comments';

export const store = configureStore({
  reducer: {
    [commentSlice.name]: commentSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {comments: CommentsState}
export type AppDispatch = typeof store.dispatch;
