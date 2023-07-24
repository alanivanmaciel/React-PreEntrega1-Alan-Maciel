import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ id, title, description, price, stock, img }) => {
  return (
    <article className="DetailContainer">
      <header>
        <h1>{title}</h1>
      </header>
      <picture>
        <img width={400} src={img} alt={title} />
      </picture>
      <section>
        <h3>Descripcion: {description}</h3>
        <p>ID de Producto: {id}</p>
        <p>Stock: {stock} </p>
        <p>Precio: ${price}</p>
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
        />
      </section>
      <footer></footer>
    </article>
  );
};

export default ItemDetail;
