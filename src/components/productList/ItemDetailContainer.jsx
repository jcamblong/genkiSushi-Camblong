import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchProduct } from "../../utils/firestoreFetch";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    firestoreFetchProduct(itemId)
        .then(result => setProduct(result))
        .catch(err => console.log(err))
}, []);

  return(
    <ItemDetail item={product}/>
  )};

  export default ItemDetailContainer;