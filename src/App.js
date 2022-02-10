import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';
import { ListItem } from '@material-ui/core';
import { CustomFetch } from './customFetch';
import { useEffect } from 'react';
import { products } from './components/ItemList';
function App() {

  useEffect (() => {
    CustomFetch(2000, products)
    .then(response => products(response))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
    <Navbar />
    <ItemListContainer />
    <ItemCount />
    <ListItem />
    <div className="App">
    </div>
    <hr />
    <ul>{

      products.map(item =><li key={item.id}>{item.name}</li>)
      }
    </ul>
    </>
  );
}

export default App;