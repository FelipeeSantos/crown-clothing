import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.toggleCartHidden
});

export const addItems = (item) => ({
  type: CartActionTypes.addItem,
  payload: item,
});