import { CustomFetch } from './customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import {products} from './products';



export function ItemList() {
    const [ item , setDato] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        if (categoryId === undefined) {
            CustomFetch(2000, products)
        .then(response => setDato(response))
        .catch(error => console.log(error))
        } else {
        CustomFetch(2000, products.filter(item => item.category === categoryId))
        .then(response => setDato(response))
        .catch(error => console.log(error))
        }
    },[categoryId]);
    
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
        <p>Cargando...</p>
        </div>
        )}