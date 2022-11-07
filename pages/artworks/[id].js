import Image from "next/image";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import Head from "next/head";
import Layout from "../../components/Layout";

const Artwork = ({ artwork }) => {
    return (
        <Layout title={artwork.data.attributes.Title}>
            {/* TODO edit the content builder to all lower case as i have to use uppercase to get the api endpoint */}
            {/* <Head>
                {artwork.data.attributes.meta_title && (
                    <title>{artwork.data.attributes.meta_title}</title>
                )}
                {artwork.data.attributes.meta_description && (
                    <meta
                        name="description"
                        content={artwork.data.attributes.meta_description}
                    />
                )}
            </Head> */}
            <div>
                <h3>{artwork.data.attributes.title}</h3>
                <Image
                    src={fromImageToUrl(artwork.data.attributes.image)}
                    alt={`${artwork.data.attributes.slug}`}
                    width="500px"
                    height="500px"
                    // layout="responsive"
                />
                <p>{artwork.data.attributes.content}</p>
            </div>
        </Layout>
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
