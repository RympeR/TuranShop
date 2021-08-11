import { GET_PRODUCTS } from "../types";
import { data } from "./testData";
import { instance } from "../../utils/axios_conf";

export const getProducts = (products: any) => {
    // console.log(products)
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};
