import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function NavBar(props) {
  return (
    <nav className="NavBar">
      <Link to="/" className="LinkMenu">
        <h1>RUDA Colecciones</h1>
      </Link>
      <div className="Menu">
        <Button>
          <Link to="/" className="LinkMenu">
            Productos
          </Link>
        </Button>
        <Button>
          <Link to="/category/sacos" className="LinkMenu">
            Sacos
          </Link>
        </Button>
        <Button>
          <Link to="/category/kimonos" className="LinkMenu">
            Kimonos
          </Link>
        </Button>
        <Button>
          <Link to="/category/satin" className="LinkMenu">
            Satin
          </Link>
        </Button>
        <Button>
          <Link to="Cart" className="LinkMenu">
            <CartWidget />
          </Link>
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;
