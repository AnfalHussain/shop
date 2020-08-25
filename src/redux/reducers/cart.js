import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "../actions/types";

const initialState = {
  products: [],
  orders: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newWorkshop = action.payload;
      let workshopExists = state.products.find(
        (workshop) => workshop.id === newWorkshop.id
      );
      if (!workshopExists) {
        return {
          ...state,
          products: state.products.concat(newWorkshop),
        };
      }

    case REMOVE_FROM_CART:
      const workshopToBeRemove = action.payload;
      let updatedproducts = state.products.filter(
        (workshop) => workshop !== workshopToBeRemove
      );
      return {
        ...state,
        products: updatedproducts,
      };

    case CHECKOUT:
      console.log("reducer CHECKOUT");
      return {
        ...state,
        orders: state.orders.concat(action.payload),
        products: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
