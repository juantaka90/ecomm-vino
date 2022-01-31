import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function App() {
return (
    <div style={{ display: "block", padding: 30 }}>
    <div>
        <Badge color="secondary" badgeContent={2}>
        <ShoppingCartIcon />{" "}
        </Badge>
</div>
    </div>
);
}