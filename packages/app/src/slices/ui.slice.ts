import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isCommentsOpen: false,
  },
  reducers: {
    toggleComments: (state) => {
      state.isCommentsOpen = !state.isCommentsOpen;
    },
  },
});

export const { toggleComments } = uiSlice.actions;
export const { name: uiSlicePath, reducer: uiSliceReducer } = uiSlice;
