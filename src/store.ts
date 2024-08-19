// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, loginSlice } from "./api/api-slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [loginSlice.reducerPath]: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loginSlice.middleware)
      .concat(apiSlice.middleware),
});
