import { GET_PRODUCTS } from "../actionTypes";
import { data } from "./testData";

export const getProducts = (products: any) => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};
