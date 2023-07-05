import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface FormState {
  shortenUrl: Array<string>;
}

const initialState: FormState = {
  shortenUrl: [],
};

export const formSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUrl: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        shortenUrl: [...state.shortenUrl, payload],
      };
    },
  },
});

// State selectors
export const selectCount = (state: RootState) => state.urls.shortenUrl;

export const { addUrl } = formSlice.actions;

export default formSlice.reducer;
