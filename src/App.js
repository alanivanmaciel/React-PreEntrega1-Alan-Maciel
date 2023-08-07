import { createContext } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const cartContext = createContext({ cart: [] });

function App() {
  return (
    <div className="App">
      <cartContext.Provider value={{ cart: [1, 2, 5, 10], prueba: "OK" }}>
        <BrowserRouter>
          <NavBar />
          <div className="Container">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/contacto"
                element={<h1>Seccion en mantenimiento</h1>}
              />
              <Route path="*" element={<h1>Page not found: 404</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </cartContext.Provider>
    </div>
  );
}

export default App;
export { cartContext };
