import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [totalI, setTotalI] = useState(0);

        const addToCart = (item, cant) => {
        const theSame = productos.find((p) => p.id === item.id);
        if (theSame !== undefined) {
            theSame.cantidadItems+=cant
        }else {
            setProductos([
                ...productos,
                {
                id: item.id,
                name: item.name,
                URL: item.URL,
                cost: item.cost,
                cantidadItems: cant,
                stock: item.stock,
            }]);
        }
    }
        const clearCart = () => {
            setProductos([])
            setTotalI(0);
        };
        
        const deleteObject = (id) => {
            setProductos(productos.filter((p) => p.id !== id));
            let searching = productos.find((p) => p.id === id)
            setTotalI(totalI-searching.cantidadItems);
        }
        
        const inCart = (id) => {
            return productos.find((p) => p.id === id)
        };

        const prodCant = (value) => {
            setTotalI(totalI+value)
        }

        return (
            <CartContext.Provider value={{productos, addToCart, clearCart, deleteObject, prodCant, inCart, totalI, setTotalI}}> {children} </CartContext.Provider>
        )
    
    }

export default CartContextProvider;