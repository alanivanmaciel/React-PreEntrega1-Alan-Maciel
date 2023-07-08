import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos al ECommerce"} />
      </header>
    </div>
  );
}

export default App;
