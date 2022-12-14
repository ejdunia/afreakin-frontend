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
import sampleImage from "../public/jokerjj.jpg";
import contactBG from "../public/BWbg.jpg"
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
                    <div
                        className={`${styles.container} ${styles.flexCol} ${styles.flex}`}
                    >
                        <div className={`${styles.banner} ${styles.flex}`}>
                            <div
                                className={`${styles.flex} ${styles.headerContainer}`}
                            >
                                <h1
                                    className={`${styles.largeHeaderText} ${styles.verticalText}`}
                                >
                                    AFREAKIN
                                </h1>
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
                            <div className={styles.bannerImageContainer}>
                                <div className={styles.bannerImage1}></div>
                                <div className={styles.bannerImage2}></div>
                            </div>
                        </div>
                        <section
                            className={`${styles.section} ${styles.flexCol} ${styles.flexCenter}`}
                        >
                            <h2 className={styles.titleFont}>WHAT WE DO</h2>

                            <div className={styles.invertContainer}>
                                <div className={`${styles.whatWeDoItem}`}>
                                    <div
                                        className={`${styles.flex} ${styles.flexCenter} ${styles.WWDTextContainer}`}
                                    >
                                        <h3
                                            className={`${styles.verticalText} ${styles.largeHeaderText}`}
                                        >
                                            NIGGUS
                                        </h3>{" "}
                                        <div className={styles.WWDText}>
                                            <p className={styles.midHeaderText}>
                                                Our Fashion Brand for street
                                                apparel.
                                                <br /> Designed and Customised
                                                with art by Us and for You
                                            </p>
                                            <button
                                                className={
                                                    styles.discoverMoreButton
                                                }
                                            >
                                                DISCOVER
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.WWDImage}>
                                        <Image
                                            src={sampleImage}
                                            layout="fill"
                                            alt="sample image"
                                        />
                                    </div>
                                </div>{" "}
                                <div className={`${styles.whatWeDoItem}`}>
                                    <div
                                        className={`${styles.flex} ${styles.flexCenter} ${styles.WWDTextContainer}`}
                                    >
                                        <h3
                                            className={`${styles.verticalText} ${styles.largeHeaderText}`}
                                        >
                                            ART
                                        </h3>{" "}
                                        <div className={styles.WWDText}>
                                            <p className={styles.midHeaderText}>
                                                Some text about art.
                                                <br /> Designed and Customised
                                                with art by Us and for You
                                            </p>
                                            <button
                                                className={
                                                    styles.discoverMoreButton
                                                }
                                            >
                                                DISCOVER
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.WWDImage}>
                                        <Image
                                            src={sampleImage}
                                            layout="fill"
                                            alt="sample image"
                                        />
                                    </div>
                                </div>{" "}
                                <div className={`${styles.whatWeDoItem}`}>
                                    <div
                                        className={`${styles.flex} ${styles.flexCenter} ${styles.WWDTextContainer}`}
                                    >
                                        <div className={styles.stopCollapse}>
                                            <h3
                                                className={`${styles.verticalText} ${styles.largeHeaderText}`}
                                            >
                                                CUSTOM APPAREL
                                            </h3>{" "}
                                        </div>
                                        <div className={styles.WWDText}>
                                            <p className={styles.midHeaderText}>
                                                Our Fashion Brand for street
                                                apparel.
                                                <br /> Designed and Customised
                                                with art by Us and for You
                                            </p>
                                            <button
                                                className={
                                                    styles.discoverMoreButton
                                                }
                                            >
                                                DISCOVER
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.WWDImage}>
                                        <Image
                                            src={sampleImage}
                                            layout="fill"
                                            alt="sample image"
                                        />
                                    </div>
                                </div>{" "}
                                <div className={`${styles.whatWeDoItem}`}>
                                    <div
                                        className={`${styles.flex} ${styles.flexCenter} ${styles.WWDTextContainer}`}
                                    >
                                        <h3
                                            className={`${styles.verticalText} ${styles.largeHeaderText}`}
                                        >
                                            DIGITAL CONTENT
                                        </h3>{" "}
                                        <div className={styles.WWDText}>
                                            <p className={styles.midHeaderText}>
                                                Our Fashion Brand for street
                                                apparel.
                                                <br /> Designed and Customised
                                                with art by Us and for You
                                            </p>
                                            <button
                                                className={
                                                    styles.discoverMoreButton
                                                }
                                            >
                                                DISCOVER
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.WWDImage}>
                                        <Image
                                            src={sampleImage}
                                            layout="fill"
                                            alt="sample image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={styles.contactContainer}>

                        </section>
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
