import type { Meta, StoryObj } from "@storybook/react";
import ShortenForm from "../components/ShortenForm/ShortenForm";
import { Provider } from "react-redux";
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export const MockedState: any = {
  userUrl: [
    {
      userUrl: "story",
      id: 20,
    },
  ],
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
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const meta: Meta<typeof ShortenForm> = {
  title: "All Components/ Shorten Form",
  component: ShortenForm,
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
  excludeStories: /.*MockedState$/,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Copied = {
  decorators: [
    (story: any) => (
      <MockStore urlsState={{ MockedState }}>{story()}</MockStore>
    ),
  ],
};
