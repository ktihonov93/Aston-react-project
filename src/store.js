import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import { customMiddleWare } from "./services/customMiddleWare";

const reducer = {
  auth: authReducer,
  message: messageReducer
};
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleWare),
  devTools: true
});
export default store;
