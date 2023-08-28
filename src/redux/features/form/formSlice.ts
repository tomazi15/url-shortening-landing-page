import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface FormState {
  shortenUrl: Array<string>;
  copied: number | null;
}

const initialState: FormState = {
  shortenUrl: [],
  copied: null,
};

export const formSlice = createSlice({
  name: "urls",
  initialState,
  reducers: {
    addUrl: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        shortenUrl: [...state.shortenUrl, payload],
      };
    },
    setCopiedAction: (state, { payload }) => {
      return { ...state, copied: payload.id };
    },
  },
});

// State selectors
export const selectCount = (state: RootState) => state.urls.shortenUrl;

export const { addUrl, setCopiedAction } = formSlice.actions;

export default formSlice.reducer;
