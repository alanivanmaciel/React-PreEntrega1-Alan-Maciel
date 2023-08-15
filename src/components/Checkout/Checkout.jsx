import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/firebase";
import { cartContext } from "../../context/cartContext";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useState, useContext } from "react";
import "./Checkout.css";
import { TextField } from "@mui/material";

function Checkout() {
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const navigate = useNavigate();
  const { cart, clearCart, getTotalPriceInCart } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: getTotalPriceInCart(),
    };

    try {
      const idOrderBuy = await createOrder(orderData);
      navigate(`/order-confirmation/${idOrderBuy}`);
      clearCart();
    } catch (error) {
      console.log(`No se pudo realizar la compra, motivo: ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  return (
    <div className="ContainerForm">
      <form>
        <h2>Completa los datos para finalizar la compra</h2>

        <div className="Inputs">
          <TextField
            required
            size="small"
            label="Nombre"
            value={buyer.firstname}
            name="firstname"
            type="text"
            onChange={onInputChange}
          />

          <TextField
            required
            size="small"
            label="Apellido"
            value={buyer.lastname}
            name="lastname"
            type="text"
            onChange={onInputChange}
          />
          <TextField
            required
            size="small"
            label="Edad"
            value={buyer.age}
            name="age"
            type="number"
            onChange={onInputChange}
          />
        </div>
        <div>
          <ButtonComponent
            disabled={
              !(
                buyer.firstname !== "" &&
                buyer.lastname !== "" &&
                buyer.age !== ""
              )
            }
            onClick={handleCheckout}
            width="200px"
            height="40px"
          >
            Finalizar Compra
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
