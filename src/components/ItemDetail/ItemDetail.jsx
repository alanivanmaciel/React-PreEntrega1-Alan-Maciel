import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ id, title, description, price, stock, img }) => {
  function handleAddToCart(quantity) {
    console.log(`Agregaste ${quantity} de ${title} al carrito.`);
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
        <h3>Descripcion: {description}</h3>
        <p>ID de Producto: {id}</p>
        <p>Stock: {stock} </p>
        <p>Precio: ${price}</p>
        <ItemCount
          onAddToCart={handleAddToCart}
          initial={1}
          stock={stock}
          title={title}
        />
      </section>
      <footer></footer>
    </article>
  );
};

export default ItemDetail;
