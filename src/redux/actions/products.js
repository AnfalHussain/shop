import instance from "./instance";
import { SET_PRODUCTS } from "./types";

export const setProducts = () => async (dispatch) => {
  try {
    const res = await instance.get("products/");
    const products = res.data;

    dispatch({ type: SET_PRODUCTS, payload: products });
  } catch (error) {
    console.error(error);
  }
};
