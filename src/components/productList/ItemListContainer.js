import React, { useState } from "react";
import data from '../../data/products.json';
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return(
    <section className="popular" id="popular">

    <div className="heading">
        <span>nuestra carta</span>
        <h3>categorias</h3>
    </div>
    <ItemList items={data}/>

    </section>
  )};

  export default ItemListContainer;