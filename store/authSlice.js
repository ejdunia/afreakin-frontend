import { createSlice } from "@reduxjs/toolkit";

// const initialState = {isLoggedIn: null }

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logOut(state) {
            state.isLoggedIn = false;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;
