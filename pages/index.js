import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_URL } from "../utils/urls";
import Notification from "../components/Notification";
import { uiActions } from "../store/uiSlice";
import { sendCartData } from "../store/cartSlice";
import Layout from "../components/Layout";
import styles from "@/styles/Home.module.css";

// let isFirstRender = true;
export default function Home({}) {
    // const dispatch = useDispatch(dispatch = useDispatch();
    // const notification = useSelector((state) => state.ui.notification);
    // const cart );
    // const notification = useSelector((state) => state.ui.notification);
    // const cart = useSelector((state) => state.cart);
    // useEffect(() => {
    //     if (isFirstRender) {
    //         isFirstRender = false;
    //         return;
    //     }
    //     dispatch(sendCartData(cart));
    // }, [cart, dispatch]);
    return (
        <Layout>
            <div className={styles.background}>
                <div className={styles.blur}>
                    <div className={styles.container}>
                        <div className={styles.banner}>
                            <div className={styles.headerContainer}>
                                <h1 className={styles.headerTitle}>AFREAKIN</h1>
                                <div>
                                    <p className={styles.headerText}>
                                        Tribe for the creative
                                    </p>
                                    <p className={styles.headerQuote}>
                                        <q style={{ fontSize: "1.7rem" }}>
                                            ...believing deeply in the power of
                                            art to inspire future generations
                                        </q>{" "}
                                        - Virgil Abloh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
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

// put the below for the notification from firebase inbetween the layout tag
{
    /* {notification && (
                <Notification
                    type={notification.type}
                    message={notification.message}
                />
            )}{" "} */
}
