import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

        const addToCart = (item, cant) => {
            setProductos([
                ...productos,
                {
                id: item.id,
                name: item.name,
                URL: item.URL,
                cost: item.cost,
                stock: cant,
            }]);
        }
        const clearCart = () => {
            setProductos([])
        }
    return (
        <CartContext.Provider value={{productos, addToCart, clearCart}}> {children} </CartContext.Provider>
    )
}

export default CartContextProvider;