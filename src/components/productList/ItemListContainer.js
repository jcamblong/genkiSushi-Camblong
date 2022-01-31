import React, { useState } from "react";
import data from '../../data/products.json';
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  return(
    <section class="popular" id="popular">

    <div class="heading">
        <span>nuestra carta</span>
        <h3>categorias</h3>
    </div>
    <div className="box-container" id="product-list">

      { data.map((element, index) => ( 
        <div className='box' id={index}>
        <a href="#" className="fas fa-heart"></a>
        <div className="image">
            <img src={"img/food-"+ element.image +".png"} alt="" />
        </div>
        <div className="content">
            <h3>{element.name}</h3>
            <ItemCount />
            <div className="price">${element.price}</div>
            <a className="btn">agregar</a>
        </div>
        </div>))}

    </div>
    </section>
  )};

  export default ItemListContainer;