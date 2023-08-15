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
        <h2>Productos seleccionados</h2>
        {cart.map((item) => (
          <div key={item.id} className="Item">
            <div className="Product">
              <img width={55} src={item.img} alt={item.title} />
              <Link to={`/product/${item.id}`}>
                <p>{item.title}</p>
              </Link>
            </div>
            <p>Cantidad: {item.count}</p>
            <p>$ {formatPrice(item.price * item.count)}</p>
            <ButtonComponent
              onClick={() => removeItem(item.id)}
              width="120px"
              height="30px"
            >
              Eliminar
            </ButtonComponent>
          </div>
        ))}
        <div className="Footer"></div>
      </div>
      <div className="Summary">
        <h2>Resumen de compra</h2>
        <div className="SummaryItems">
          <p>Productos </p>
          <p> ${formatPrice(getTotalPriceInCart())}</p>
        </div>
        <div className="SummaryItems">
          <p>Envio </p>
          {getTotalPriceInCart < 15000 ? (
            <p> ${formatPrice(1000)} </p>
          ) : (
            <p>Gratis</p>
          )}
        </div>

        <Link to="/checkout">
          <ButtonComponent width="200px" height="40px">
            Continuar compra
          </ButtonComponent>
        </Link>
      </div>
    </div>
  );
}

export default CartContainer;
