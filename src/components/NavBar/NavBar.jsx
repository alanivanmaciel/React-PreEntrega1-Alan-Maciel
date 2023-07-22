import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="LinkMenu"
      >
        Productos
      </Button>
      <Menu
        className="algo"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} className="MenuItem">
          <Link to="/category/sacos">Sacos</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className="MenuItem">
          <Link to="/category/kimonos">Kimonos</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className="MenuItem">
          <Link to="/category/satin">Satin</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

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
          <BasicMenu />
        </Button>
        <Button>
          <Link to="/prueba" className="LinkMenu">
            Contactos
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
