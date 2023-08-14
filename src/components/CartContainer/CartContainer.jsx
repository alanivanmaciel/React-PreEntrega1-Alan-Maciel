import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./CartContainer.css";
import { formatPrice } from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem, getTotalPriceInCart } = useContext(cartContext);
  if (cart.length === 0) {
    return <h1>Carrito vacio...</h1>;
  }
  return (
    <div className="CartContainer">
      <div className="CardList">
        <h2>Productos</h2>
        {cart.map((item) => (
          <div key={item.id} className="Item">
            <div className="Product">
              <img width={55} src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
            <p>Cantidad: {item.count}</p>
            <p>$ {formatPrice(item.price * item.count)}</p>
            <ButtonComponent onClick={() => removeItem(item.id)}>
              Eliminar
            </ButtonComponent>
          </div>
        ))}
        <div className="Footer"></div>
      </div>
      <div className="Summary">
        <h2>Resumen de compra</h2>
        <div>Total de la compra: $ {formatPrice(getTotalPriceInCart())}</div>
        <Link to="/checkout">
          <ButtonComponent width="200px" height="40px">
            Finalizar compra
          </ButtonComponent>
        </Link>
      </div>
    </div>
  );
}

export default CartContainer;
