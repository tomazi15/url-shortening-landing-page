import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface FormState {
  userUrl: Array<string>;
  copied: number | null;
}

const initialState: FormState = {
  userUrl: [],
  copied: null,
};

export const formSlice = createSlice({
  name: "urls",
  initialState,
  reducers: {
    addUrl: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        userUrl: [...state.userUrl, payload],
      };
    },
    setCopiedAction: (state, { payload }) => {
      return { ...state, copied: payload.id };
    },
  },
});

// State selectors
export const selectCount = (state: RootState) => state.urls.userUrl;

export const { addUrl, setCopiedAction } = formSlice.actions;

export default formSlice.reducer;
