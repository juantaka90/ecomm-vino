import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
// import ItemCount from './components/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import { ItemList } from './components/ItemList';




function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/item/:id" element={<ItemDetailContainer />} />
    <Route path="/category/:categoryId" element={<ItemListContainer/>} />
    </Routes>
    {/* <ItemList /> */}
    {/* <ItemCount /> */}

    {/* <ItemDetailContainer /> */}
    </BrowserRouter>
    </div>
  );
}

export default App;