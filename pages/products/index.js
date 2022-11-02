import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { API_URL } from "../../utils/urls";
import { Grid, Container } from "@mui/material";
import ProductCard from "../../components/ProductGridCard";
import { useSelector } from "react-redux";

export default function ProductsPage({ products }) {
    const cartItems = useSelector((state) => state.cart.itemsList);
    console.log(cartItems);
    return (
        <div className={styles.container}>
            <Head>
                <title>Products</title>
                <meta
                    name="description"
                    content="Afreakin Product page and store"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Products</h1>
            <Container>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {products.data?.map((product) => {
                        return (
                            <Grid item key={product.id} xs={9} sm={6} md={4}>
                                <ProductCard product={product} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </div>
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
