import axios from "axios";
import { Dish, DishSections } from "../../../interfaces";
import { axiosGetFunction } from "../../axios";
import { store } from "../../redux";
import { loadDishesh, loadRestaurantInfo } from "../../redux/restaurantInfo";
import { createSession, loadFoodieInfo } from "../../redux/foodieInfo";

export const fetchAndStoreJWT = async () => {
  const responseData: {
    jwtToken: string;
    selfInfo: {
      sessionId: string;
      tableSectionId: string;
      tableNumber: number;
    };
    data: {
      dishesh: Dish[];
      dishSection: DishSections[];
    };
  } = await axiosGetFunction({
    parentUrl: "foodie",
    config: {
      withCredentials: true,
    },
  });

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${responseData.jwtToken}`;

  store.dispatch(
    loadFoodieInfo({
      sessionUUID: responseData.selfInfo.sessionId,
      tableNumber: responseData.selfInfo.tableNumber,
      tableSectionId: responseData.selfInfo.tableSectionId,
    })
  );

  store.dispatch(
    loadRestaurantInfo({
      allDisheshs: responseData.data.dishesh,
      dishSections: responseData.data.dishSection,
    })
  );
};
