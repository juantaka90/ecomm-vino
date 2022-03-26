import { collection, serverTimestamp, setDoc, doc} from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import db from './firebaseConfig';

export function Cart () {
    const {productos, clearCart, deleteObject}= useContext(CartContext);
    const createOrder = () => {
        let order = {
            buyer: {
                email: "jorgito@hotmail.com",
                name: "jorgito el loquillo",
                adress: "entre y tanto",
            },
            date: serverTimestamp(),
            items: productos.map( (item) => {return {URL: item.URL, price: item.cost, name: item.name, cant: item.cantidadItems, stock: item.stock}})
        }
        console.log(order);

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "ordenes"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
        .then(result => alert('Tu Orden Fue Creada: ' + result.id))
        .catch(error => console.log(error));
    }

    return (
        <div className="contenedorItems">
        <h1>Carrito</h1>
        {
            productos.length > 0
        ?<button className="btn btn-dark" type="button" id="btnVaciar" onClick={clearCart}> Vaciar Carrito </button>
        :<h5> Su Carrito Esta Vacio </h5> }

        {productos.length> 0 && productos.map(item => (
            <div className="card mb-3">
            <div className="row g-0">
            <div className="col-md-4">
                <img src={item.URL} style={{maxWidth: "340px"}} className="card h-50" alt={item.name}/>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title" style={{textAlign:"left"}}>{item.name}</h5>
                <button className="btn btn-dark" type="button" onClick={()=>deleteObject(item.id)}> Eliminar </button>
                <h6 className="card-text" style={{textAlign:"left"}}>{item.cantidadItems} items</h6>
                <p className="card-text" style={{textAlign:"left"}}><small className="text-muted">Precio Por Unidad: {item.cost} </small></p>
                <p className="card-text" style={{textAlign:"left"}}><small className="text-muted">Precio Total: {item.cost + item.cantidadItems} </small></p>
                </div>
                <button className="btn btn-dark" type="button" onClick={createOrder}> Orden </button>
                </div>
            </div>
            </div>
        </div>
        ),)}</div>)}