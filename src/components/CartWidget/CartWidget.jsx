import { useContext } from "react";
import cart from "./assets/carrito.svg";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const context = useContext(cartContext);

  if (context.getTotalItemsInCart() === 0) {
    return <img src={cart} alt="cart-widget" />;
  }

  return (
    <Link to="/cart" className="LinkMenu">
      <img src={cart} alt="cart-widget" />
      <span> {context.getTotalItemsInCart()} </span>
    </Link>
  );
}

export default CartWidget;
