import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { fromImageToUrl } from "../../utils/urls";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import { cartActions } from "../../store/cartSlice";
import CartItem from "../../components/CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(cartActions.removeFromCart(cartItem));
    };

    const getTotal = (a, b) => a + b.totalPrice;

    // const arry = [
    //     { totalPrice: 1, other: "sd" },
    //     { totalPrice: 1, other: "sd" },
    // ];

    const quantity = useSelector((state) => state.cart.totalQuantity);
    const cartItems = useSelector((state) => state.cart.itemsList);
    const total = cartItems.reduce(getTotal, 0);
    console.log(total);
    return (
        <>
            <h3>Cart total: {quantity}</h3>
            <h3>Total amount: ₦{total}</h3>
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </>
    );
};

export default Cart;
