import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl }) => {
  return (
      <div className='box'>
      <div className="image">
          <img src={pictureUrl} alt="" />
      </div>
      <div className="content">
          <h3>{title}</h3>
          <div className="price">Precio: ${price}</div>
          <div className="stock">Stock: {stock}</div>
          <Link to={`/item/${id}`} className="btn">agregar</Link>
      </div>
      </div>
  )
}

export default Item;