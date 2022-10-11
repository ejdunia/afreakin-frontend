import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import { Grid } from "@mui/material";

export default function Artworks({ artworks }) {
    // console.log(`${API_URL}/api/artworks?populate=*`);
    return (
        <div>
            <Head>
                <title>Artworks</title>
                <meta name="description" content="Afreakin Art Gallery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Gallery</h1>
            <div>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {" "}
                    {artworks.data?.map((art) => {
                        return (
                            <Link href={`/artworks/${art.id}`} key={art.id}>
                                <a>
                                    <Image
                                        src={fromImageToUrl(
                                            art.attributes.image
                                        )}
                                        alt={art.attributes.name}
                                        width="100%"
                                        height="100%"
                                        // layout="responsive"
                                        objectFit="contain"
                                    />
                                    <div>{art.attributes.name} </div>
                                </a>
                            </Link>
                        );
                    })}
                </Grid>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    // fetch the data
    const art_res = await fetch(`${API_URL}/api/artworks/?populate=*`);
    const artworks = await art_res.json();
    // return the data as props
    return {
        props: { artworks },
    };
}
