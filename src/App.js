import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
// import ItemCount from './components/ItemCount';
import { ListItem } from '@material-ui/core';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import { ItemList } from './components/ItemList';




function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/item/" element={<ItemDetailContainer />} />
    <Route path="/category/:categoryId" element={<ItemListContainer/>} />
    </Routes>
    {/* <ItemList /> */}
    {/* <ItemCount /> */}
    <ListItem />
    {/* <ItemDetailContainer /> */}
    </BrowserRouter>
    <div className="App">
    </div>
    <hr />
    </>
  );
}

export default App;