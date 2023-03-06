import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Dish, DishSections } from "../../interfaces";

interface RestaurantInfo {
  allDisheshs: Dish[];
  dishSections: DishSections[];
}

const initialState: RestaurantInfo = {
  allDisheshs: [],
  dishSections: [],
};

const restaurantInfo = createSlice({
  name: "restaurantInfo",
  initialState,
  reducers: {
    loadDishesh: (state, action: PayloadAction<Dish[]>) => {
      state.allDisheshs = action.payload;
    },

    loadDishSections: (state, action: PayloadAction<DishSections[]>) => {
      state.dishSections = action.payload;
    },
    loadRestaurantInfo: (state, action: PayloadAction<RestaurantInfo>) => {
      const { allDisheshs, dishSections } = action.payload;
      state.allDisheshs = allDisheshs;
      state.dishSections = dishSections;
    },
  },
});

export const { loadDishesh, loadDishSections, loadRestaurantInfo } =
  restaurantInfo.actions;

export default restaurantInfo.reducer;
