import { useEffect, useState } from "react";
import { getDataByID } from "../../services/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getDataByID(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, []);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
