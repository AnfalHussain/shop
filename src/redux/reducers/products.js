import { SET_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      const products = payload;
      return {
        products: products,
      };

    default:
      return state;
  }
};
