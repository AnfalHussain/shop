import { SET_NEW_ORDERS, EDIT_ORDER } from "../actions/types";

const initialState = {
  newOrders: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_ORDERS:
      const orders = payload;
      return {
        newOrders: orders,
      };

    case EDIT_ORDER:
      const updatedOrder = payload;
      console.log(updatedOrder);
      const foundOrder = state.newOrders.find(
        (order) => order.id == updatedOrder.id
      );

      foundOrder = updatedOrder;
      return {
        ...state,
        newOrders: [...state.newOrders],
      };

    default:
      return state;
  }
};
