import { useContext } from "react";
import cart from "./assets/carrito.svg";
import { cartContext } from "../../context/cartContext";

function CartWidget() {
  const context = useContext(cartContext);
  return (
    <div className="CartWidget">
      <img src={cart} alt="cart-widget" />
      <span> {context.getTotalItemsInCart()} </span>
    </div>
  );
}

export default CartWidget;
