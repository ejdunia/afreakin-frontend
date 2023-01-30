import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import CartItem from "../../components/CartItem";
import styles from "@/styles/cartPage.module.css";
import ShippingForm from "@/components/ShippingForm";

const Cart = () => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(cartActions.removeFromCart(cartItem));
    };

    const getTotal = (a, b) => a + b.totalPrice;
    const quantity = useSelector((state) => state.cart.totalQuantity);
    const cartItems = useSelector((state) => state.cart.itemsList);
    const total = cartItems.reduce(getTotal, 0);
    console.log(total);
    const isCartEmpty = (total) => {
        if (total <= 0) {
            return true;
        }
    };
    const estimatedShippingCost = 2000;
    return (
        <>
            <div className={styles.sectionContainer}>
                <h1 className={styles.midHeaderText}>Cart({quantity})</h1>
            </div>
            <div className={styles.container}>
                <div>
                    <h1
                        className={`${styles.largeHeaderText} ${styles.verticalText}`}
                    >
                        AFREAKIN
                    </h1>
                    <div className={styles.arrowContainer}>
                        <div className={styles.arrow}></div>
                        <p>Back</p>
                    </div>
                </div>
                <div className={styles.container2}>
                {/* refactor the cart to a component */}
                    {isCartEmpty(total) ? (
                        <h1> No items in cart </h1>
                    ) : (
                        <div className={`${styles.cartItemsContainer} `}>
                            {cartItems.map((cartItem) => (
                                <CartItem key={cartItem.id} item={cartItem} />
                            ))}
                        </div>
                    )}
                    <ShippingForm />
                </div>

                <div className={styles.checkout}>
                    <div className={styles.checkoutDetails}>
                        <div>
                            <p>Subtotal: </p> <p>₦{total.toLocaleString()}</p>
                        </div>
                        <div>
                            <p>Estimated Shipping: </p>{" "}
                            {total <= 0 ? (
                                <p>₦0</p>
                            ) : (
                                <p>
                                    ₦{estimatedShippingCost.toLocaleString()}{" "}
                                </p>
                            )}
                        </div>
                        <div>
                            <p>Products in Cart:</p> <p>{quantity}</p>
                        </div>
                        <div className={styles.line}></div>
                    </div>

                    <div className={styles.checkoutDetails}>
                        <div>
                            <h1 className={styles.midHeaderText}>Total:</h1>{" "}
                            {isCartEmpty(total) ? (
                                <p>₦0</p>
                            ) : (
                                <h1 className={styles.midHeaderText}>
                                    ₦
                                    {(
                                        estimatedShippingCost + total
                                    ).toLocaleString()}{" "}
                                </h1>
                            )}
                        </div>
                    </div>
                    <button
                        className={styles.priBtn}
                        disabled={isCartEmpty(total)}
                    >
                        CHECKOUT
                    </button>
                    {/* to-do  add a link back to the shopping */}
                    <p>Continue Shopping</p>
                </div>
            </div>
        </>
    );
};

export default Cart;
