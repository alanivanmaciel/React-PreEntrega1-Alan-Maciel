import { useState, useEffect } from "react";
import { getData, getCategoryId } from "../../services/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { CircularProgress } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  let title = categoryId ? categoryId.toUpperCase() : "Todos los productos";

  useEffect(() => {
    setIsLoading(true);
    async function requestProducts() {
      let respuesta = categoryId
        ? await getCategoryId(categoryId)
        : await getData();
      setProducts(respuesta);
      setIsLoading(false);
    }

    requestProducts();
  }, [categoryId]);

  if (isLoading) {
    return <CircularProgress className="loader" />;
  }

  if (products.length === 0) {
    return <p>No hay productos disponibles para esa consulta.</p>;
  }

  return (
    <div className="ItemContainer">
      <h1>{title}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
