import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { checkForExpiredToken } from "./actions";
import thunk from "redux-thunk";

// Actions
import { setProducts, setNewOrders } from "./actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(setProducts());
store.dispatch(setNewOrders());
store.dispatch(checkForExpiredToken());

export default store;
