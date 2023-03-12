import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import restaurantInfo from "./restaurantInfo";
import foodieInfo from "./foodieInfo";
import selectedItems from "./selectedItems";
import globalLoader from "./globalLoader";
import orderContainer from "../../pages/orders/summary/redux/orders";
import cartOrderContainer from "../../pages/orders/cart/redux/cartOrderContainer";

export const store = configureStore({
  reducer: {
    restaurantInfo,
    foodieInfo,
    selectedItems,
    globalLoader,
    orderContainer,
    cartOrderContainer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
