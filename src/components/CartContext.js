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
                price: item.cost,
                stock: cant,
            }]);
        }

    return (
        <CartContext.Provider value={{productos, addToCart}}> {children} </CartContext.Provider>
    )
}

export default CartContextProvider;