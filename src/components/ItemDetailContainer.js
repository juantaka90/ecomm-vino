import { ItemDetail } from "./ItemDetail";
import { CustomFetch } from "./customFetch";
import { useEffect, useState } from "react";

export function ItemDetailContainer () {
    const [products, setProducts] = useState({});

    useEffect (() => {
        CustomFetch(2000, products[3])
        .then(response => setProducts(response))
        .catch(error => console.log(error))
    }, );
return (
    <div>
        <ItemDetail/>
    </div>
)
}