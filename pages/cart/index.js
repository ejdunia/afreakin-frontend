import Image from "next/image";
import { useSelector } from "react-redux";
import { fromImageToUrl } from "../../utils/urls";
const Cart = () => {
    const getTotal = (a, b) => a + b.totalPrice;
    const arry = [
        { totalPrice: 1, other: "sd" },
        { totalPrice: 1, other: "sd" },
    ];
    const quantity = useSelector((state) => state.cart.totalQuantity);
    const cartItems = useSelector((state) => state.cart.itemsList);
    const total = cartItems.reduce(getTotal, 0);
    console.log(total);
    // console.log(arry);
    // console.log(cartItems);
    // console.log(cartItems.reduce(getTotal));
    return (
        <>
            <h1>
                Cart total: {quantity} Total amount: ₦{total}
            </h1>
            {cartItems.map((cartItem) => {
                return (
                    <div key={cartItem.id}>
                        <h1>{cartItem.name}</h1>
                        <Image
                            src={fromImageToUrl(cartItem.image)}
                            alt="image"
                            width="100px"
                            height="100px"
                            // layout="responsive"
                            objectFit="cover"
                        />
                        <p>{cartItem.totalPrice}</p>
                        <p>{cartItem.quantity}</p>
                    </div>
                );
            })}
        </>
    );
};

export default Cart;
