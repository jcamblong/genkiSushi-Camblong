import ItemCount from "./ItemCount";
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../cart/CartContext";
import "../../App.css";

const ItemDetail = (item) => {

  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
      alert("You have selected " + qty + " items.");
      setItemCount(qty);
      test.addToCart(item, qty);
  }

  return (
    <div className="detail-box">
      <div className="image">
        <img src={item.item.image} alt="" />
      </div>
      <div className="content">
        <h1>{item.item.name}</h1>
        <div className="price">Precio: ${item.item.price}</div>
        <div className="description">Ingredientes: {item.item.detail}</div>
        <ItemCount stock={item.item.stock} initial={itemCount} onAdd={onAdd}/>
      </div>
    </div>
  );
};

export default ItemDetail;
