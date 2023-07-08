import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import Button from "@mui/material/Button"

function NavBar(props) {
  return (
    <nav className="NavBar">
      <h1>RUDA Colecciones</h1>
      <div className="Menu">
        <Button>Productos</Button>
        <Button>Temporadas</Button>
        <Button>Contacto</Button>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;