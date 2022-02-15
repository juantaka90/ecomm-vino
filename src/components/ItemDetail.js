export function ItemDetail ({name, stock, cost, URL, describe}){
    
    return (
        <div class=" row-cols-1 row-cols-md-3 ">
<div class="col">
    <div class="card h-50">
    <img src={URL} class="card-img-top" alt={name}/>
    <div class="card-body">
        <h5 class="card-title">cantidad {stock}</h5>
        <p class="card-text">precio {cost}</p>
        <p class= "card-text">Descripcion: {describe}</p>
    </div>
    <div class="card-footer">
        <small class="text-muted"></small>
    </div>
    </div>
</div>
</div>
    )
}