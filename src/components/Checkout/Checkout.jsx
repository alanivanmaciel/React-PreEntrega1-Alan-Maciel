import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/firebase";
import { cartContext } from "../../context/cartContext";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useState, useContext } from "react";

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
      console.log(`Gracias por tu compra, tu numero de orden es ${idOrderBuy}`);
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

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      age: "",
    });
  }
  return (
    <form>
      <h2>Completa tus datos para completar la compra🛍</h2>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="lastname" style={{ width: "100px", marginRight: 4 }}>
          Nombre
        </label>
        <input
          value={buyer.firstname}
          name="firstname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="lastname" style={{ width: "100px", marginRight: 4 }}>
          Apellido
        </label>
        <input
          value={buyer.lastname}
          name="lastname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
        <input
          value={buyer.age}
          name="age"
          type="number"
          onChange={onInputChange}
        />
      </div>

      <ButtonComponent
        disabled={
          !(buyer.firstname !== "" && buyer.lastname !== "" && buyer.age !== "")
        }
        onClick={handleCheckout}
      >
        Confirmar Compra
      </ButtonComponent>
      <button onClick={resetForm}>Cancelar</button>
    </form>
  );
}

export default Checkout;
