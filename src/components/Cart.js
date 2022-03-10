import { useContext } from "react";
import { CartContext } from "./CartContext";

export function Cart () {
    const {productos, clearCart, deleteObject, inCart }= useContext(CartContext);
    const createOrder = () => {
        let order = {
            buyer: {
                email: "jorgito@hotmail.com",
                name: "jorgito el loquillo",
                adress: "entre y tanto",
            },
            items: inCart.map( (item) => {return {id: item.id, price: item.cost, name: item.name, cant: item.cantidadItems}})
        }
        console.log(order);
    }
    return (
        <div className="contenedorItems">
        <h1>Carrito</h1>
        {
            productos.length > 0
        ?<button className="btn btn-dark" type="button" id="btnVaciar" onClick={clearCart}> Vaciar </button>
        :<h5> Su Carrito Esta Vacio </h5> }

        {productos.length>0 && productos.map(item => (
            <div className="contenedorItemDescripcion">
            
            <div className="contenedorItemDetallesCarrito">
            <img src={item.URL} alt={item.name}></img>
            <div className="contenedorItem">
            <h5>{item.name}</h5>
            <button className="btn btn-dark" type="button" onClick={()=>deleteObject(item.id)}> Eliminar </button>
            </div>
            </div>
            <div className="contenedorItem"></div>
            <h6 className="textDescripcion">{item.cantidadItems} items</h6>
            <h6 className="textPrecio"> Precio Por Unidad: {item.cost}</h6>
            <h6 className="textPrecio"> Precio Total: {item.cost + item.cantidadItems}</h6>
            <button className="btn btn-dark" type="button" onClick={createOrder}> Orden </button>
            </div>))
        }</div>)}