import { CardActions } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { fromImageToUrl } from "../utils/urls";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(cartActions.removeFromCart(item.id));
    };
    const incrementItem = () => {
        dispatch(cartActions.increaseProdQty(item));
    };
    const decrementItem = () => {
        dispatch(cartActions.reduceProdQty(item.id));
    };

    return (
        <div>
            <h1> {item.name}</h1>
            <Image
                src={fromImageToUrl(item.image)}
                alt="image"
                width="100px"
                height="100px"
                // layout="responsive"
                objectFit="cover"
            />
            <p>Price: ₦{item.price}</p>

            <p>Total: ₦{item.totalPrice}</p>

            <p> Quantity: {item.quantity}</p>
            <CardActions>
                <IconButton aria-label="delete" onClick={removeFromCart}>
                    <DeleteIcon sx={{ fontSize: "3rem", color: "red" }} />
                </IconButton>
            </CardActions>
            <button onClick={decrementItem}>-</button>
            <h3>{item.quantity}</h3>
            <button onClick={incrementItem}>+</button>
        </div>
    );
};

export default CartItem;
