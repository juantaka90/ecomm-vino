import { CustomFetch } from './customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import {productos} from './productos';

export function ItemList() {
    const [ item , setDato] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        if (categoryId === undefined) {
            CustomFetch(2000, productos)
        .then(response => setDato(response))
        .catch(error => console.log(error))
        } else {
        CustomFetch(2000, productos.filter(item => item.category === categoryId))
        .then(response => setDato(response))
        .catch(error => console.log(error))
        }
    },[categoryId]);
    
    if(item.length === 0){
        return <div><p>Cargando...</p></div>
    }else {
                return (
        <div>

            {item.map ((item) => (
            <Item
            key={item.id}
            name={item.name}
            stock={item.stock}
            cost={item.cost}
            URL={item.URL}
            id={item.id}
        />
            ))}
        </div>
        )}}