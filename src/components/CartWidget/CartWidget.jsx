import { useContext } from "react";
import cart from "./assets/carrito.svg";
import { cartContext } from "../../App";

function CartWidget() {
  const context = useContext(cartContext);
  console.log(context);
  return (
    <div className="CartWidget">
      <img src={cart} alt="cart-widget" />
      <span> {context.cart.length} </span>
    </div>
  );
}

export default CartWidget;
