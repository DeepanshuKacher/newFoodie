import axios from "axios";
import { Dish, DishSections } from "../../../interfaces";
import { axiosGetFunction } from "../../axios";
import { store } from "../../redux";
import { loadDishesh, loadRestaurantInfo } from "../../redux/restaurantInfo";
import { createSession, loadFoodieInfo } from "../../redux/foodieInfo";
import { connectMqtt } from "../../mqtt/initialLoad";
import * as mqtt from "mqtt";
import { itemsFetch } from "./itemsFetch";

export const initialFetch = async () => {
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
      id: string;
    };
  } = await axiosGetFunction({
    parentUrl: "foodie",
    config: {
      withCredentials: true,
    },
  });

  const { data, jwtToken, selfInfo } = responseData;
  const { sessionId, tableNumber, tableSectionId } = selfInfo;
  const { dishSection, dishesh, id } = data;

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${responseData.jwtToken}`;

  await itemsFetch({ sessionUUID: sessionId });

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
      restaurantId: responseData.data.id,
    })
  );
};
