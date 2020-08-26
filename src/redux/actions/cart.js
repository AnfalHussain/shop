import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT,
  CHANGE_QUANTITY,
} from "./types";
import instance from "./instance";

export const addItem = (item) => {
  console.log("addItem clickked", item);
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

// ({
//   type: ADD_TO_CART,
//   payload: item,
// });

export const removeItem = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const checkout = (products, history) => async (dispatch) => {
  try {
    console.log("products", products);
    const res = await instance.post("orders/", products);
    dispatch({ type: CHECKOUT, payload: res.data });
    if (history) {
      history.replace("/successful");
    }
  } catch (error) {
    console.error(error);
  }
};

export const changeQuantity = (quantity) => ({
  type: CHANGE_QUANTITY,
  payload: quantity,
});
