import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      setOrderData(order);
    });
  }, []);

  return (
    <div>
      <h1>Gracias por tu compra!</h1>
      {orderData ? (
        <div>
          Productos:{" "}
          {orderData.items.map((item) => {
            return (
              <small>
                {item.title} - {item.count} unidades.
              </small>
            );
          })}
        </div>
      ) : (
        <p>cargando</p>
      )}
    </div>
  );
}

export default OrderConfirm;
