import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from "../../actionTypes";
import initialState from "./product.initialState";

type actionType = {
  type: string;
  payload: any;
};

export const productReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
