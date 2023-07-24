import { useState, useEffect } from "react";
import { getData, getCategoryId } from "../../services/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  let title = categoryId ? categoryId.toUpperCase() : "Todos los productos";

  useEffect(() => {
    async function requestProducts() {
      let respuesta = categoryId
        ? await getCategoryId(categoryId)
        : await getData();
      setProducts(respuesta);
    }

    requestProducts();
  }, [categoryId]);

  return (
    <div className="ItemContainer">
      <h1>{title}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
