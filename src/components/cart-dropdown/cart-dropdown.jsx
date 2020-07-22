import React from "react";
import CustomButton from "../custom-button/custom-button";

import "../../sass/components/_cart-dropdown.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  </div>
);

export default CartDropdown;