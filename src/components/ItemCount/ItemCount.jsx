import { useState } from "react";
import "./ItemCount.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ItemCount = ({ stock, initial, onAddToCart }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="ItemCount">
      <div className="Count">
        <button onClick={decrement}>-</button>
        <h4>{quantity}</h4>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <ButtonComponent onClick={() => onAddToCart(quantity)}>
          Agregar al carrito
        </ButtonComponent>
      </div>
    </div>
  );
};

export default ItemCount;
