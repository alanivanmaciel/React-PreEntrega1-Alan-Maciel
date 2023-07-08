import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar(props) {
  return (
    <nav className="NavBar">
      <h1>RUDA Colecciones</h1>
      <div className="Menu">
        <button>Productos</button>
        <button>Temporadas</button>
        <button>Contacto</button>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
