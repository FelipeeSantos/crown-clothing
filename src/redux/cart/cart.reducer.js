import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggleCartHidden":
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.addItem:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
      default:
      return state;
  }
}

export default cartReducer;