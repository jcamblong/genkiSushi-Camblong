import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import data from "../../data/products.json";
import customFetch from "../../utils/customFetch";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    customFetch(0, data.find(item => item.id == parseInt(itemId)))
        .then(result => setProduct(result))
        .catch(err => console.log(err))
});

  return(
    <ItemDetail item={product}/>
  )};

  export default ItemDetailContainer;