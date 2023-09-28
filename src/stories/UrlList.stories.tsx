import type { Meta } from "@storybook/react";
import { Provider } from "react-redux";
import UrlList from "../components/UrlList/UrlList";
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export const MockedState: any = {
  userUrl: [
    {
      userUrl: "http://urlstory.co.uk",
      id: 16,
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

const meta: Meta<typeof UrlList> = {
  title: "All Components/ Url List",
  component: UrlList,
  tags: ["autodocs"],
  excludeStories: /.*MockedState$/,
};

export default meta;

export const Default = {
  decorators: [
    (story: any) => <MockStore urlsState={MockedState}>{story()}</MockStore>,
  ],
};

export const Copied = {
  decorators: [
    (story: any) => (
      <MockStore urlsState={{ ...MockedState, copied: 16 }}>
        {story()}
      </MockStore>
    ),
  ],
};
