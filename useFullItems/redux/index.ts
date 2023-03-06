import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import restaurantInfo from "./restaurantInfo";
import foodieInfo from "./foodieInfo";
import selectedItems from "./selectedItems";
import globalLoader from "./globalLoader";

export const store = configureStore({
  reducer: { restaurantInfo, foodieInfo, selectedItems, globalLoader },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
