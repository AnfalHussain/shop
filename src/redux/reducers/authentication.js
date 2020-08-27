import * as actionTypes from "../actions/types";

const initialState = {
  user: null,
  profile: null,
  profileLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      const user = action.payload;
      return {
        ...state,
        user: user,
      };

    default:
      return state;
  }
};

export default reducer;
