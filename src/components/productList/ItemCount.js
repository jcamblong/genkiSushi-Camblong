import React, { useEffect, useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, []);

  const increment = () => {
    if( count < stock ) {
      setCount(count + 1);
    } 
  }
  const decrement = () => {
    if ( count > initial) {
      setCount(count -1);
    }
  }
  return(
    <QtySelector>
      <button>+</button>
      <input>{count}</input>
      <button>-</button>
    </QtySelector>
  )
}

export default ItemCount;