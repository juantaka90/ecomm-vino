
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';
function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer />
    <ItemCount />
    <div className="App">
    </div>
    <hr />
    </>
  );
}

export default App;
