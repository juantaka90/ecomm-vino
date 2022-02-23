import { Link } from 'react-router-dom';
import { useState } from 'react';
import ItemCount from './ItemCount';

export function ItemDetail ({name, stock, cost, URL, describe}){
    const [itemCount, setitemCount] = useState(0);
    const onAdd = (cant) => {
        alert("Seleccionaste " + cant + "items");
        setitemCount(cant);
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
    {
        itemCount === 0
        ? <ItemCount onAdd={onAdd} />
        : <Link to='/Cart'><button type="button" class="btn btn-success"> Chequeo </button> </Link>
    }
</div>
</div>
)
    }