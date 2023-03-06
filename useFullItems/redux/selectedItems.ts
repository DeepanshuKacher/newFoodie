import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SelectedItems {
  selectedSection: number | undefined;
}

const initialState: SelectedItems = {
  selectedSection: undefined,
};

const selectedItems = createSlice({
  name: "selectedItems",
  initialState,
  reducers: {
    selectSection: (
      state,
      action: PayloadAction<SelectedItems["selectedSection"]>
    ) => {
      state.selectedSection = action.payload;
    },
  },
});

export const { selectSection } = selectedItems.actions;

export default selectedItems.reducer;
