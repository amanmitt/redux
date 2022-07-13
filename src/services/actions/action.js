import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

export const addToCart = (data) => {
  console.log("action", data);
  return {
    data: data,
    type: ADD_TO_CART,
  };
};

export const removeFromCart = () => {
  return {
    type: REMOVE_FROM_CART,
  };
};
