import NavBar from "./components/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/itemDetailcontainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a C-ROA Shoes"} />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
