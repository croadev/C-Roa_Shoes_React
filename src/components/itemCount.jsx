import { useState, useEffect } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <button
        onClick={decrease}
        className="btn btn-light fw-bold text-uppercase mx-2"
        disabled={count <= 1}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={increase}
        className="btn btn-light fw-bold text-uppercase mx-2"
        disabled={count >= stock}
      >
        +
      </button>
      <div>
        <button
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
          className="btn btn-primary fs-5 fw-bold text-uppercase py-1 my-2 w-50"
        >
          Agregar Al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
