export default function Item ({name, cost, URL, stock}){
    return (
        <div className=" row-cols-1 row-cols-md-3 ">
<div className="col">
    <div className="card h-50">
    <img src={URL} className="card-img-top" alt={name}/>
    <div className="card-body">
        <h5 className="card-title">cantidad {stock}</h5>
        <p className="card-text">precio {cost}</p>
    </div>
    <div className="card-footer">
        <small className="text-muted"></small>
    </div>
    </div>
</div>
</div>
    )
}