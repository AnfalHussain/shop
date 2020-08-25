import { SET_ERRORS } from "../actions/types";

const initialState = {
  errors: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: true
      };
    default:
      return state;
  }
};

export default reducer;
