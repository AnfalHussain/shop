import { SET_NEW_ORDERS, EDIT_ORDER } from "./types";
import instance from "./instance";

export const setNewOrders = () => async (dispatch) => {
  try {
    const res = await instance.get("admin/orders/");
    const orders = res.data;

    dispatch({ type: SET_NEW_ORDERS, payload: orders });
  } catch (error) {
    console.error(error);
  }
};

export const editOrder = (order, orderId) => async (dispatch) => {
  try {
    console.log("(order, orderId)", (order, orderId));
    const res = await instance.put(`admin/update/order/${orderId}/`, order);
    dispatch({ type: EDIT_ORDER, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
