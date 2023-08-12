import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function CartContainer() {
  const { cart, removeItem, clearCart } = useContext(cartContext);

  if (cart.length === 0) {
    return <h1>Carrito vacio...</h1>;
  }

  return (
    <div>
      <h1>Carrito de compras</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>Producto: {item.title}</h2>
          <p>Cantidad: {item.count}</p>
          <p>ID: {item.id}</p>
          <img width={40} src={item.img} alt={item.title} />
          <ButtonComponent onClick={() => removeItem(item.id)}>
            Eliminar
          </ButtonComponent>
        </div>
      ))}
      <div>Total de la compra: $999</div>
      <ButtonComponent width="200px" height="40px" onClick={() => clearCart()} >
        Vaciar
      </ButtonComponent>
      <ButtonComponent width="200px" height="40px">
        Finaliza compra
      </ButtonComponent>
    </div>
  );
}

export default CartContainer;
