import { Link } from "react-router-dom" 

export default function Item ({id, name, cost, URL, stock}){
    return (
        <div className="card-body" id='item'>
        <div className="card">
    <img src={URL} className="card-img-top" alt={name}/>
    <div className="card-body">
    <h5 className="card-title">Cantidad {stock}</h5>
    <p className="card-text">Precio {cost}</p>
    </div>
    <Link to={`/item/${id}`}type="button" className="btn btn-success"> Ver Detalles</Link>
    </div>
</div>
    )
}