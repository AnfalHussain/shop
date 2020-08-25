import { SET_ERRORS } from "./types";

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: errors,
});

export const resetErrors = () => {
  return {
    type: SET_ERRORS,
    payload: false,
  };
};
