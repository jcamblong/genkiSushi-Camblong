import React, { useState } from "react";
import CartContext from "../cart/CartContext";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  const cartItems = useContext(CartContext);
  return (
    <div className="icons">
      <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link>
      <span className='badge badge-warning' id='lblCartCount'> 4 </span>
    </div>
  );
};

export default CartWidget;
