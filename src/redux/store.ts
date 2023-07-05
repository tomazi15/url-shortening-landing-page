import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/form/formSlice";

export const store = configureStore({
  reducer: {
    urls: formReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
