import { createSlice } from "@reduxjs/toolkit";

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
        removeFromCart() {},
        setShowCart(state) {
            state.showCart = true;
        },
    },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
