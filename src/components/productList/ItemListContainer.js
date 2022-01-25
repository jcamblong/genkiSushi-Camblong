import React, { useState } from "react";
import Data from '../../data/products.json';

const ItemListContainer = () => {
  return(
    <section class="popular" id="popular">

    <div class="heading">
        <span>nuestra carta</span>
        <h3>categorias</h3>
    </div>
    <div className="box-container" id="product-list">

      { Data.map(element => ( 
        <div className='box'>
        <a href="#" className="fas fa-heart"></a>
        <div className="image">
            <img src={"img/food-"+ element.image +".png"} alt="" />
        </div>
        <div className="content">
            <h3>{element.name}</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span> (x10) </span>
            </div>
            <div className="price">${element.price}</div>
            <a className="btn">agregar</a>
        </div>
        </div>))}

    </div>
    </section>
  )};

  export default ItemListContainer;