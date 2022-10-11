import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import { useSelector, useDispatch } from "react-redux";

export default function Home({}) {
    return (
        <>
            <h1>Home</h1>
        </>
    );
}

// export async function getStaticProps() {
//     // fetch the data
//     const product_res = await fetch(`${API_URL}/api/products/?populate=*`);
//     const products = await product_res.json();
//     // return the data as props
//     return {
//         props: { products },
//     };
// }
