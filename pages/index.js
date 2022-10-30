import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_URL } from "../utils/urls";
import Notification from "../components/Notification";
import { uiActions } from "../store/uiSlice";
import { sendCartData } from "../store/cartSlice";
let isFirstRender = true;
export default function Home({}) {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);
    const cart = useSelector((state) => state.cart);
    useEffect(() => {
        if (isFirstRender) {
            isFirstRender = false;
            return;
        }
        dispatch(sendCartData(cart));
    }, [cart, dispatch]);
    return (
        <>
            {notification && (
                <Notification
                    type={notification.type}
                    message={notification.message}
                />
            )}{" "}
        </>
    );
}

export async function getStaticProps() {
    // fetch the data
    const product_res = await fetch(`${API_URL}/api/products/?populate=*`);
    const products = await product_res.json();
    // return the data as props
    return {
        props: { products },
    };
}
