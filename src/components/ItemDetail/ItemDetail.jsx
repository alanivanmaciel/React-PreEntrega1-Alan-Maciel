import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, title, color, price, stock, img }) => {
  const { addToCart } = useContext(cartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  function handleAddToCart(quantity) {
    addToCart(title, quantity);
    console.log(`Agregaste ${quantity} de ${title} al carrito.`);
    setIsAddedToCart(true);
  }

  return (
    <article className="DetailContainer">
      <header>
        <h1>{title}</h1>
      </header>
      <picture>
        <img width={400} src={img} alt={title} />
      </picture>
      <section>
        <h3>Descripcion: {color}</h3>
        <p>ID de Producto: {id}</p>
        <p>Stock: {stock} </p>
        <p>Precio: ${price}</p>
        {stock > 0 ? (
          isAddedToCart ? (
            <Link to={`/cart`}>
              <ButtonComponent>Ir al carrito</ButtonComponent>
            </Link>
          ) : (
            <ItemCount
              onAddToCart={handleAddToCart}
              initial={1}
              stock={stock}
              title={title}
            />
          )
        ) : (
          <h3>No hay stock disponible.</h3>
        )}
      </section>
    </article>
  );
};

export default ItemDetail;
