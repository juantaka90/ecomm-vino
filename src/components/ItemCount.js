/* eslint-disable no-lone-blocks */
import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function ItemCount({ onAdd })  {
    const [itemCount, setItemCount] = React.useState(1);
    
    return (
    <div style={{ display: "block", padding: 40 }} >
        <button onClick={() => onAdd(itemCount)} type="button" className="btn btn-primary" > Agregar Al Carrito </button>
        <div>
        <Badge color="primary" badgeContent={itemCount}>
            <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
            <Button
            onClick={() => {
            setItemCount(Math.max(itemCount - 1, 0));
            }}
            >
            {" "}
            <RemoveIcon fontSize="small" />
            </Button>
            <Button
            onClick={() => {
                {if (itemCount<5) setItemCount(itemCount+1)
            }}
        }>
            {" "}
            <AddIcon fontSize="small" />
            </Button>
        </ButtonGroup>
        </div>
    </div>
    );
}