import { combineReducers } from "redux";
// Reducers
import authReducer from "./authentication";
import products from "./products";
import errorReducer from "./errors";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  authReducer: authReducer,
  products,
  errors: errorReducer,
  cartReducer: cartReducer,
});

export default rootReducer;
