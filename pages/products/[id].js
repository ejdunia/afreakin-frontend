import Image from "next/image";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import Head from "next/head";
import { toTwoDP } from "../../utils/format";
import styles from "./ProductsDetailsPage.module.css";

const Product = ({ product }) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.productsContainer}>
                <Head>
                    {product.data.attributes.meta_title && (
                        <title>{product.data.attributes.meta_title}</title>
                    )}
                    {product.data.attributes.meta_description && (
                        <meta
                            name="description"
                            content={product.data.attributes.meta_description}
                        />
                    )}
                </Head>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                        <Image
                            src={fromImageToUrl(product.data.attributes.image)}
                            alt={`${product.data.attributes.slug}`}
                            layout="fill"
                        />
                    </div>
                </div>
                <div className={styles.detailsSection}>
                    <h3 className={styles.productName}>
                        {product.data.attributes.productName}
                    </h3>
                    <p className={styles.price}>
                        ₦{toTwoDP(product.data.attributes.price)}
                    </p>
                    <p className={styles.content}>
                        {product.data.attributes.content}
                    </p>
                </div>
            </div>
        </div>
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
