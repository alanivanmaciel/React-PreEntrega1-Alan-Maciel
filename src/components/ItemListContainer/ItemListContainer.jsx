import { useState, useEffect } from "react";
import { getData, getCategoryId } from "../../services/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  async function requestProducts() {
    let respuesta =  categoryId? await getCategoryId(categoryId) : await getData();
    setProducts(respuesta);
  }

  useEffect(() => {
    requestProducts();
  }, []);

  return (
    <>
      <h1> {greeting} </h1>
      <h2>Listado de productos</h2>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
