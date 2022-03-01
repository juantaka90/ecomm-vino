import { ItemDetail } from "./ItemDetail";
import { CustomFetch } from "./customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { productos } = require('./productos');

export function ItemDetailContainer () {
    const [ data , setData] = useState({});
    const {id} = useParams()
    
    useEffect (() => {
        CustomFetch(1000, productos.find(i => i.id === parseInt(id)))
        .then(response => setData(response))
        .catch(error => console.log(error))
    }, [id]);

return (
    <div>
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