import React, { useEffect, useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, []);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  const decrement = () => {
    if (count > initial + 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="qty-selector">
      <button className="btn-increment" onClick={increment}>+</button>
      <div className="productAmount">{count}</div>
      <button className="btn-decrement" onClick={decrement}>-</button>
      {
        stock && count
          ? <button className="btn btn-warning" onClick={() => onAdd(count)}>Add to Cart</button>
          : <button className="btn-add" disabled>AGREGAR</button>
      }

    </div>
  )
}

export default ItemCount;