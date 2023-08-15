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
          <h3>ID de orden de compra: {id}</h3>
          {orderData.items.map((item) => {
            return (
              <div key={item.id}>
                <p>
                  Productos: {item.title} {item.color} - ({item.count})
                  unidades.
                </p>
              </div>
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
