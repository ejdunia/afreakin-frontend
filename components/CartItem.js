import { CardActions } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { fromImageToUrl } from "../utils/urls";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import styles from "@/styles/cartItem.module.css";

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
        <div className={styles.cartItemContainer}>
            <Image
                src={fromImageToUrl(item.image)}
                alt="image"
                width="200px"
                height="150px"
                objectFit="cover"
            />
            <div className={styles.detailSection}>
                <div className={styles.cartItemDetails}>
                    <div className={styles.productName}>
                        {item.name}
                        <div className={styles.border}>
                            <CardActions>
                                <IconButton
                                    aria-label="remove from cart"
                                    onClick={removeFromCart}
                                >
                                    <DeleteIcon
                                        sx={{
                                            fontSize: "2.5rem",
                                            color: "#31093e",
                                        }}
                                    />
                                </IconButton>
                            </CardActions>
                        </div>
                    </div>
                    <div className={styles.productDetails}>
                        <p>Price: ₦{item.price.toLocaleString()}</p>
                        <p> Qty: {item.quantity}</p>
                        <p>Size: {"x5"}</p>
                    </div>
                </div>
                <div className={styles.itemTotal}>
                    <p>Total: ₦{item.totalPrice.toLocaleString()}</p>

                    <div className={styles.buttonContainer}>
                        <button
                            onClick={decrementItem}
                            className={styles.qtyBtn}
                        >
                            -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                            onClick={incrementItem}
                            className={styles.qtyBtn}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
