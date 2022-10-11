import Image from "next/image";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import Head from "next/head";

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

const Artwork = ({ artwork }) => {
    return (
        <div>
            <Head>
                {artwork.data.attributes.meta_title && (
                    <title>{artwork.data.attributes.meta_title}</title>
                )}
                {artwork.data.attributes.meta_description && (
                    <meta
                        name="description"
                        content={artwork.data.attributes.meta_description}
                    />
                )}
            </Head>

            <h3>{artwork.data.attributes.name}</h3>
            <Image
                src={fromImageToUrl(artwork.data.attributes.image)}
                alt={`${artwork.data.attributes.slug}`}
                width="500px"
                height="500px"
                // layout="responsive"
            />
            <p>{artwork.data.attributes.content}</p>
        </div>
    );
};

export default Artwork;

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`${API_URL}/api/artworks/${id}?populate=*`);
    const artwork = await res.json();

    return {
        props: { artwork },
    };
}

export async function getStaticPaths() {
    // retrive all the possible paths
    const art_res = await fetch(`${API_URL}/api/artworks/?populate=*`);
    const artworks = await art_res.json();

    const paths = artworks.data.map((artwork) => {
        return { params: { id: artwork.id.toString() } };
    });
    //  return them
    return {
        paths,
        fallback: false,
    };
}

// import Image from "next/image";
// import { fromImageToUrl, API_URL } from "../../utils/urls";
// import Head from "next/head";

// const Art = ({ art }) => {
//     return (
//         <div>
//             <Head>
//                 {art.data.attributes.meta_title && (
//                     <title>{art.data.attributes.meta_title}</title>
//                 )}
//                 {art.data.attributes.meta_description && (
//                     <meta
//                         name="description"
//                         content={art.data.attributes.meta_description}
//                     />
//                 )}
//             </Head>

//             <h3>{art.data.attributes.name}</h3>
//             <Image
//                 src={fromImageToUrl(art.data.attributes.image)}
//                 alt={`${art.data.attributes.slug}`}
//                 width="500px"
//                 height="500px"
//                 // layout="responsive"
//             />
//             <h4>{art.data.attributes.Title}</h4>
//             <p>{art.data.attributes.Description}</p>
//         </div>
//     );
// };

// export default Art;

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch(`${API_URL}/api/artworks/${id}?populate=*`);
//     const art = await res.json();

//     return {
//         props: { art },
//     };
// };
// export async function getStaticPaths() {
//     // retrive all the possible paths
//     const art_res = await fetch(`${API_URL}/api/artworks/?populate=*`);
//     const artworks = await art_res.json();

//     const paths = artworks.data.map((art) => {
//         return { params: { id: art.id.toString() } };
//     });
//     console.log(paths);
//     //  return them
//     return {
//         paths,
//         fallback: false,
//     };
// }
