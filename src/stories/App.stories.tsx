import type { Meta } from "@storybook/react";
import { Provider } from "react-redux";
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import App from "../components/App";

export const MockedState: any = {
  userUrl: [],
  copied: null,
};

const MockStore = ({ urlsState, children }: any) => (
  <Provider
    store={configureStore({
      reducer: {
        urls: createSlice({
          name: "urls",
          initialState: urlsState,
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
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const meta: Meta<typeof App> = {
  title: "Full Page",
  component: App,
  tags: ["autodocs"],
  excludeStories: /.*MockedState$/,
};

export default meta;

export const FullPage = {
  decorators: [
    (story: any) => <MockStore urlsState={MockedState}>{story()}</MockStore>,
  ],
};
