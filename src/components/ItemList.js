import Item from "./Item"

export function ItemList({productos}) {
    return (
        <div>
    {productos.map ((item) => (
            <Item
            key={item.id}
            name={item.name}
            stock={item.stock}
            cost={item.cost}
            URL={item.URL}
            id={item.id}
        />))}
        </div>
        )}