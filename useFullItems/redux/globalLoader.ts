import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GlobalLoader {
  show: boolean;
}

const initialState: GlobalLoader = {
  show: false,
};

const globalLoader = createSlice({
  name: "globalLoader",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.show = true;
    },
    hideLoader: (state) => {
      state.show = false;
    },
  },
});

export const { hideLoader, showLoader } = globalLoader.actions;

export default globalLoader.reducer;
