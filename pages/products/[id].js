import Image from "next/image";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import { toTwoDP } from "../../utils/format";
import styles from "./ProductsDetailsPage.module.css";
import Layout from "../../components/Layout";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const Product = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };
    const increase = () => {
        if (quantity >= product.data.attributes.quantity) {
            return;
        }
        setQuantity((quantity) => quantity + 1);
    };
    const decrease = () => {
        if (quantity <= 1) {
            return;
        }
        setQuantity((quantity) => quantity - 1);
    };
    return (
        <Layout
            title={product.data.attributes.productName}
            keywords={`${product.data.attributes.productName}, fashion, street fashion, art, canvas`}
        >
            <div className={styles.mainContainer}>
                <div className={styles.productsContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.image}>
                            <Image
                                src={fromImageToUrl(
                                    product.data.attributes.image
                                )}
                                alt={`${product.data.attributes.slug}`}
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div className={styles.detailsSectionContainer}>
                        <div className={styles.detailsSection}>
                            <div className={styles.productDetailSegment}>
                                <h3 className={styles.productName}>
                                    {product.data.attributes.productName}
                                </h3>
                                <p className={styles.price}>
                                    ₦
                                    {product.data.attributes.price.toLocaleString()}
                                </p>
                            </div>
                            <div className={styles.productDetailSegment}>
                                <p className={styles.content}>
                                    {product.data.attributes.content}
                                </p>
                            </div>
                            <p className={styles.content}>
                                Items Left: {product.data.attributes.quantity}
                            </p>
                            <p className={styles.content}>
                                Estimated to ship in 3 {"-"} 7 days in Nigeria
                            </p>
                            <div className={styles.optionsContainer}>
                                <div className={styles.selectContainer}>
                                    <p className={styles.selectHeader}>
                                        Quantity
                                    </p>
                                    <div className={styles.qtyBtnCont}>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={decrease}
                                        >
                                            -
                                        </button>
                                        <p>{quantity}</p>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={increase}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.selectContainer2}>
                                    <p className={styles.selectHeader}>Size</p>
                                    <div className={styles.qtyBtnCont}>
                                        <FormControl
                                            variant="standard"
                                            sx={{
                                                m: 1,
                                                minWidth: 120,
                                                fontSize: 40,
                                            }}
                                            size="large"
                                        >
                                            <InputLabel id="size"></InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={size}
                                                label="size"
                                                onChange={handleSizeChange}
                                            >
                                                <MenuItem disabled value="">
                                                    <em>Size</em>
                                                </MenuItem>
                                                <MenuItem value={"small"}>
                                                    Small
                                                </MenuItem>
                                                <MenuItem value={"medium"}>
                                                    Medium
                                                </MenuItem>
                                                <MenuItem value={"large"}>
                                                    Large
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                            <button className={styles.addToCart}>
                                {" "}
                                Add To Cart
                            </button>
                        </div>{" "}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Product;

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`${API_URL}/api/products/${id}?populate=*`);
    const product = await res.json();

    return {
        props: { product },
    };
};
export async function getStaticPaths() {
    // retrive all the possible paths
    const product_res = await fetch(`${API_URL}/api/products/?populate=*`);
    const products = await product_res.json();

    const paths = products.data.map((product) => {
        return { params: { id: product.id.toString() } };
    });
    //  return them
    return {
        paths,
        fallback: false,
    };
}
