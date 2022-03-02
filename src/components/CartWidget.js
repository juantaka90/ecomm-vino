import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function App() {
const productos = useContext(CartContext);

return (
    <div style={{ display: "block", padding: 30 }}>
    <div>
        <Badge color="secondary" badgeContent={productos.prodCant()}>
        <ShoppingCartIcon />{" "}
        </Badge>
</div>
    </div>
);
}