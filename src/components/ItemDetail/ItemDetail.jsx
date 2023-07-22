import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, title, description, price, stock, img }) => {
    return (
        <article>
            <header>
                <h2>ID: {id}</h2>
            </header>
            <picture>
                <img width={300 }src={img} alt={title} />
            </picture>
            <section>
                <p>Descripcion: {description}</p>
                <p>Precio: ${price}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail;