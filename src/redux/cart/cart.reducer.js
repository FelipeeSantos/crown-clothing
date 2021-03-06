import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

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
      };
    case CartActionTypes.removeItem:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
      case CartActionTypes.clearItemFromCart:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      };
      default:
      return state;
  }
}

export default cartReducer;