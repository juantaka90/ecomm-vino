import Item from "./Item"

export function ItemList({item}) {
    return (
        <div>
    {item.map (() => (
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