import CartWidget from "../CartWidget/CartWidget";

function NavBar(props) {
  return (
    <nav>
      <h1>E-Commerce</h1>
      <div>
        <button>Productos</button>
        <button>Temporadas</button>
        <button>Videos</button>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
