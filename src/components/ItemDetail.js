import { Link } from 'react-router-dom';
import Item from './Item';
import { useState } from 'react';

export function ItemDetail ({name, stock, cost, URL, describe}){
    const [ItemCount, setItemCount] = useState(0);
    const onAdd = (cant) => {
        alert("Seleccionaste " + cant + "items");
        setItemCount(cant);
    }

    if(ItemCount.lenght === 0) {
        ( <ItemCount stock={Item.stock} initial={ItemCount} onAdd={onAdd} />
            )
        
        (ItemCount.lenght === + 1)
        (
        <Link to='/Cart'><button type="button" class="btn btn-back">Back</button> </Link>
        )
        }
    
    return (
        <div className=" row-cols-3 row-cols-md-5 ">
<div className="col">
    <div className="card h-50">
    <img src={URL} className="card-img-top" alt={name}/>
    <div className="card-body">
        <h5 className="card-title">cantidad {stock}</h5>
        <p className="card-text">precio {cost}</p>
        <p className= "card-text">Descripcion: {describe}</p>
    </div>
    <div className="card-footer">
        <small className="text-muted"></small>
    </div>
    </div>
</div>
</div>
)
    }