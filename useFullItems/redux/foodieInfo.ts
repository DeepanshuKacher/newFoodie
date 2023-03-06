import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FoodieInfo {
  sessionUUID: string | undefined;
  tableNumber: number | undefined;
  tableSectionId: string | undefined;
}

const initialState: FoodieInfo = {
  sessionUUID: undefined,
  tableNumber: undefined,
  tableSectionId: undefined,
};

const currentSession = createSlice({
  name: "currentSessionUUID",
  initialState,
  reducers: {
    createSession: (state, action: PayloadAction<string>) => {
      state.sessionUUID = action.payload;
    },
    selectedTable: (state, action: PayloadAction<number>) => {
      state.tableNumber = action.payload;
    },
    selectTableSectionId: (state, action: PayloadAction<string>) => {
      state.tableSectionId = action.payload;
    },
    loadFoodieInfo: (state, action: PayloadAction<FoodieInfo>) => {
      const { sessionUUID, tableNumber, tableSectionId } = action.payload;
      state.sessionUUID = sessionUUID;
      state.tableNumber = tableNumber;
      state.tableSectionId = tableSectionId;
    },
  },
});

export const {
  createSession,
  selectTableSectionId,
  selectedTable,
  loadFoodieInfo,
} = currentSession.actions;

export default currentSession.reducer;
