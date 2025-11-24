import { BrowserRouter } from "react-router-dom";
import './App.css'
import { Nav } from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";

function App() {
  
  return (
    <> 
    <BrowserRouter>
      <CartProvider> 
        <Nav />
        <Routes> 
          <Route path="/" element={<ItemListContainer /> } /> 
          <Route path="/category/:category"
                element={<ItemListContainer />} /> 
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/admin" element={<ProductFormContainer />} />

        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
