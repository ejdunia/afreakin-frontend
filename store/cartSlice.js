import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const cartSlice = createSlice({
    name: "cart",
    initialState: { itemsList: [], totalQuantity: 0, showCart: false },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            // check if the item is there and increase the qty is so
            const existingItem = state.itemsList.find(
                (item) => item.id === newItem.product.id
            );
            if (existingItem) {
                existingItem.quantity++;
                console.log(existingItem.quantity);
                existingItem.totalPrice += newItem.product.attributes.price;
            } else {
                state.itemsList.push({
                    id: newItem.product.id,
                    price: newItem.product.attributes.price,
                    quantity: 1,
                    image: newItem.product.attributes.image,
                    totalPrice: newItem.product.attributes.price,
                    name: newItem.product.attributes.name,
                });
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === id);
            state.itemsList = state.itemsList.filter((item) => item.id !== id);
            state.totalQuantity--;
        },
        setShowCart(state) {
            state.showCart = true;
        },
        reduceProdQty(state, action) {
            const id = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(
                    (item) => item.id !== id
                );
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },

        increaseProdQty(state, action) {
            const id = action.payload.id;
            console.log(id);
            const existingItem = state.itemsList.find((item) => item.id === id);
            existingItem.quantity++;
            existingItem.totalPrice += existingItem.price;
        },
    },
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "sending request",
                type: "warning",
            })
        );

        const sendRequest = async () => {
            // send a request to the backend ** redux can't use async requests
            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "sending request",
                    type: "warning",
                })
            );
            const res = await fetch(
                `https://cart-test-a22c5-default-rtdb.firebaseio.com/cartItems.json`,
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );
            const data = await res.json();
            // send state as request is successful
            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "sent request to DB",
                    type: "success",
                })
            );
        };
        try {
            await sendRequest();
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "sending request failed",
                    type: "error",
                })
            );
        }
    };
};
export const cartActions = cartSlice.actions;
export default cartSlice;
