import { ItemDetail } from "./ItemDetail";
import { CustomFetch } from "./customFetch";
import { useEffect, useState } from "react";
import ItemCount from './ItemCount'
const { productos } = require('./productos');

export function ItemDetailContainer () {
    const [ data , setData] = useState({});
    
    useEffect (() => {
        CustomFetch(2000, productos[3])
        .then(response => setData(response))
        .catch(error => console.log(error))
    }, []);

return (
    <div>
        <ItemCount />
        <ItemDetail
        name = {data.name}
        describe = {data.describe}
        key =  {data.id}
        URL =  {data.URL}
        cost = {data.cost}
        stock = {data.stock}
            />
            </div>
    )
}