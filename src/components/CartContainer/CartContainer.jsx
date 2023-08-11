import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  if (cart.length === 0) {
    return <h1>Carrito vacio...</h1>;
  }

  return (
    <div>
      <h1>Carrito de compras</h1>
      {cart.map((item) => (
        <div>
          <h2>Producto: {item.product}</h2>
          <p>Cantidad: {item.count}</p>
          <button onClick={() => removeItem(item.product)}>Eliminar</button>
        </div>
      ))}
      <div>Total de la compra: $999</div>
      <ButtonComponent>Finaliza compra</ButtonComponent>
    </div>
  );
}

export default CartContainer;
