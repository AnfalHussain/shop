// import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "../actions/types";

// const initialState = {
//   products: [],
//   orders: [],
//   loading: true,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       console.log("ADD_TO_CART");
//       const newWorkshop = action.payload;
//       let workshopExists = state.products.find(
//         (workshop) => workshop.id === newWorkshop.id
//       );
//       if (!workshopExists) {
//         return {
//           ...state,
//           products: state.products.concat(newWorkshop),
//         };
//       }

//     case REMOVE_FROM_CART:
//       const workshopToBeRemove = action.payload;
//       let updatedproducts = state.products.filter(
//         (workshop) => workshop !== workshopToBeRemove
//       );
//       return {
//         ...state,
//         products: updatedproducts,
//       };

//     case CHECKOUT:
//       console.log("reducer CHECKOUT");
//       return {
//         ...state,
//         orders: state.orders.concat(action.payload),
//         products: [],
//       };

//     default:
//       return {
//         ...state,
//       };
//   }
// };

// export default reducer;

import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  REMOVE_FROM_CART,
  CHECKOUT,
} from "../actions/types";

const initialState = {
  products: [],
  orders: [],
  loading: true,
  quantity: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART reducer");
      const newProduct = action.payload;
      let checkProduct = state.products.find(
        (product) => product.id === newProduct.id
      );
      if (checkProduct) {
        checkProduct.quantity += newProduct.quantity;
        return {
          ...state,
          products: [...state.products],
        };
      } else {
        return {
          ...state,
          products: state.products.concat(newProduct),
        };
      }

    case CHANGE_QUANTITY:
      const quantity = action.payload;
      console.log(quantity);
      return {
        ...state,
        quantity: state.quantity + quantity,
      };

    case REMOVE_FROM_CART:
      const removedProduct = action.payload;
      let updatedProducts = state.products.filter(
        (product) => product !== removedProduct
      );
      return {
        ...state,
        products: updatedProducts,
      };

    case CHECKOUT:
      return {
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
