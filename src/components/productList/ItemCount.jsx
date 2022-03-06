import React, { useEffect, useState } from "react";

const ItemCount = ({initial=1, stock=5}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial)
  }, []);

  const increment = () => {
    if(count < stock) {
      setCount(count + 1);
    }
  }

  const decrement = () => {
    if( count > initial) {
      setCount(count - 1);
    }
  }

  return(
    <div className="container my-5">
          <h1>Counter App</h1>
          <div className="d-flex">
            <button className="btn btn-success mx-3" onClick={ increment }>+</button>
            <h2 className="mx-3">{count}</h2>
            <button className="btn btn-danger mx-3" onClick={ decrement }>-</button>
          </div>
    </div>
  )
}

export default ItemCount;