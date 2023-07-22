import { useEffect, useState } from "react";
import { getDataByID } from "../../services/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function requestProduct() {
    const respuesta = await getDataByID(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    requestProduct();
  }, []);

  return (
    <div>
      <h1>Detailcontainer</h1>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
