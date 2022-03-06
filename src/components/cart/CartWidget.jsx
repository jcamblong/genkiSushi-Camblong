import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div className="icons">
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

export default CartWidget;
