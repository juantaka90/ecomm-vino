import { Link } from "react-router-dom" 

export default function Item ({id, name, cost, URL, stock}){
    return (
        <>
        <div className="card-group">
        <div key={id} className="cont">
            </div>
            <div className=" row-cols-3 row-cols-md-3 ">
            <div className="col">
                <div className="card h-50">
                    <img src={URL} className=" divImg " alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">cantidad {stock}</h5>
                        <p className="card-text">precio {cost}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"></small>
                    </div>
                    <Link to={`/item/${id}`}type="button" className="btn btn-success"> Ver Detalles</Link>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}