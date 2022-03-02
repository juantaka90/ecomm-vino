import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

        const addToCart = (item, cant) => {
        const theSame = productos.find((productos) => productos.URL === item.URL);
        if (theSame) {
            setProductos(
                productos.map((productos) => {
                return { ...productos, count: productos.count + 1 };
                })
            );
        }else {
            setProductos([...productos,
                {
                id: item.id,
                name: item.name,
                URL: item.URL,
                cost: item.cost,
                stock: cant,
            }]);
        }
    }
        const clearCart = () => {
            setProductos([])
        };
        
        const deleteObject = (URL) => {
            setProductos(productos.filter((productos) => productos.URL !== URL));
        }

        const prodCant = () => {
            let cant = productos.map(productos=> productos.prodCant);
            return cant.reduce(((previousValue, currentValue) => parseInt(previousValue + currentValue)), 0);
        }
        return (
            <CartContext.Provider value={{productos, addToCart, clearCart, deleteObject, prodCant}}> {children} </CartContext.Provider>
        )
    
    }

export default CartContextProvider;