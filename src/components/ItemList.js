
export function ItemList({item}) {

    return (
        <div className=" row-cols-3 row-cols-md-5 ">
<div className= "col" >
    <div className="card h-50">
    <img src={item.URL} className="card-img-top" alt={item.name}/>
    <div className="card-body">
        <h5 className="card-title">cantidad {item.stock}</h5>
        <p className="card-text">precio {item.cost}</p>
        <p className= "card-text">Descripcion: {item.describe}</p>
    </div>
    <div className="card-footer">
        <small className="text-muted"></small>
    </div>
    </div>
    </div>
    </div>
        )}