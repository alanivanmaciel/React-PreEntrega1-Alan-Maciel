import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ title, id, description, price, stock, img }) => {
  return (
    <div className="Card">
      <header>
        <h2> {title} </h2>
      </header>
      <picture>
        <img src={img}></img>
      </picture>
      <section>
        <p> {description} </p>
        <p>Precio: {price} </p>
        <p> Stock: {stock} </p>
      </section>
      <footer>
        <Link to={`/product/${id}`}>
          <button>Ver producto</button>
        </Link>
      </footer>
    </div>
  );
};

export default Item;
