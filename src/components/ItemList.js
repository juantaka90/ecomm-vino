import { CustomFetch } from './customFetch';
import { useEffect, useParams } from 'react';
import Item from './Item';

const products = [
    {
    id: 30,
    name: "Castro Ventosa 750 ml",
    stock: 86,
    cost: 4500,
    URL:"https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912731_sumario_normal.jpg"
    },
    {
    id: 29,
    name: "Albiker 750 ml",
    stock: 100,
    cost: 4750,
    URL: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912774_sumario_normal.jpg"
    },
    {
    id: 76,
    name: "Muga Rosado 750 ml",
    stock: 92,
    cost: 5750,
    URL: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912952_sumario_normal.jpg"
    },
    {
    id: 36,
    name: "Petit Caust Rosado 750 ml",
    stock: 22,
    cost: 6150,
    URL: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912815_sumario_normal.jpg"
    },
    {
    id: 59,
    name: "Aroa Mutiko 750 ml",
    stock: 12,
    cost: 7250,
    URL: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912918_sumario_normal.jpg"
    },
    {
    id: 42,
    name: "Blanc De Pacs 750 ml",
    stock: 32,
    cost: 5900,
    URL: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912857_sumario_normal.jpg"
    }
]

export function ItemList() {
    const {id} = useParams();

    useEffect (() => {
        CustomFetch(2000, products.filter(item => item.id === parseInt(id)))
        .then(response => products(response))
        .catch(error => console.log(error))
    }, []);
    
        return (
        <div>
        
            {products.length > 0 ? (
        products.map((item) => (
            <Item
            key={item.id}
            name={item.name}
            stock={item.stock}
            cost={item.cost}
            URL={item.URL}
        />
            ))
        ) : (
        <p>Cargando...</p>
        )}
        </div>
    );
        }
        