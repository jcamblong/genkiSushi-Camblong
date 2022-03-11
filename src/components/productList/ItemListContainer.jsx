import ItemList from "./ItemList";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../../utils/firestoreFetch';

const ItemListContainer = () => {
  const [ filtrados, setFiltrados ] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    firestoreFetch(category)
      .then(result => setFiltrados(result))
      .catch(err => console.log(err));
  }, [category]);

  useEffect(() => {
    return (() => {
      setFiltrados([]);
    })
  }, []);

  return (
    <section className="popular" id="popular">

      <div className="heading">
        <span>nuestra carta</span>
        <h3>categorias</h3>
      </div>
      <ItemList items={filtrados} />

    </section>
  )
};

export default ItemListContainer;