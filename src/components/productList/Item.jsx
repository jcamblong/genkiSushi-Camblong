import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl }) => {
  return (
      <div className='box'>
      <div className="image">
          <img src={"img/food-"+ pictureUrl +".png"} alt="" />
      </div>
      <div className="content">
          <h3>{title}</h3>
          <div className="price">$ {price}</div>
          <Link to={`/item/${id}`}><a className="btn">agregar</a></Link>
      </div>
      </div>
  )
}

export default Item;