import NavBar from "./components/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/itemDetailcontainer";
import Cart from "./components/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import "./firebase/config";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenidos a C-ROA Shoes"} />
              }
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting={"Zapatillas"} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
