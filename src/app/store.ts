import counterReducer from "../features/counter/counter.slice";
import { configureStore } from "@reduxjs/toolkit";
import {
  apiSlice,
  apiSlice as dogApiSlice,
} from "../features/dogs/dogs-api.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogApiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), apiSlice.middleware];
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
