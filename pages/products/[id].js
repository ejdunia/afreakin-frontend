import Image from "next/image";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import Head from "next/head";
import { toTwoDP } from "../../utils/format";
// import { Grid } from "@mui/material";
// import { Paper } from "@mui/material";

// const testUrls = async () => {
//     // // fetch the data
//     // const product_res = await fetch(`${API_URL}/api/products?populate=*`);
//     // // const product_res = await fetch(`${API_URL}/api/products?populate=*`);
//     // const products = await product_res.json();

//     // const paths = products.data.map((product) => {
//     //     // return product.attributes.slug;
//     //     return product.id;
//     // });
//     const product_res = await fetch(`${API_URL}/api/products/${1}/?populate=*`);
//     const product = await product_res.json();
//     // return {
//     //     product,
//     // };
//     console.log(product.data.attributes.image.data.attributes.url);
// };
// testUrls();

const Product = ({ product }) => {
    return (
        <div>
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

            <h3>{product.data.attributes.name}</h3>
            <Image
                src={fromImageToUrl(product.data.attributes.image)}
                alt={`${product.data.attributes.slug}`}
                width="500px"
                height="500px"
                // layout="responsive"
            />
            <h4>{product.data.attributes.name}</h4>
            <p>N{toTwoDP(product.data.attributes.price)}</p>
            <p>{product.data.attributes.content}</p>
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
    console.log(paths);
    //  return them
    return {
        paths,
        fallback: false,
    };
}
