import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Cart } from './components/Cart';
import  CartContextProvider  from './components/CartContext';





function App() {

  return (
    <div className="App">
    <CartContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/item/:id" element={<ItemDetailContainer />} />
    <Route path="/category/:id" element={<ItemListContainer/>} />
    <Route path="/Cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;