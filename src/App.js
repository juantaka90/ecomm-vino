import './App.css';
// import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';
// import { ListItem } from '@material-ui/core';
import { ItemDetailContainer } from './components/ItemDetailContainer';





function App() {

  return (
    <>
    <Navbar />
    {/* <ItemListContainer /> */}
    <ItemCount />
    {/* <ListItem /> */}
    <ItemDetailContainer />
    <div className="App">
    </div>
    <hr />
    </>
  );
}

export default App;