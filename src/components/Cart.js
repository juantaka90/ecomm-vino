import { useContext } from "react";
import { CartContext } from "./CartContext";

export function Cart () {
    const {productos, clearCart, deleteObject }= useContext(CartContext);

    return (
        <div>
        <h1>Carrito</h1>
        {
            productos.map(item =>
                <div className=" row-cols-3 row-cols-md-3 ">
                <div className="card h-15">
                <div className="card-body">
                <p>{item.name}</p>
                <img src={item.URL} className="card-img-top" alt={URL.item}></img>
                <p>Precio : {item.cost}</p>
                <p>Cantidad : {item.stock}</p>
                <button type="button" className="btn btn-secondary" onClick={() => deleteObject(item.URL)}> Borrar Producto </button>
                </div>
                </div>
                </div>
                )}
            {
            <button type="button" className="btn btn-danger" onClick={clearCart}> Vaciar Carrito </button>
            }
    </div>
    );
            }