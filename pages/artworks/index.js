import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/Gallery.module.css";
import Layout from "@/components/Layout";

export default function Artworks({ artworks }) {
    return (
        <Layout>
            <div className={styles.gallery}>
                <Head>
                    <title>Artworks</title>
                    <meta name="description" content="Afreakin Art Gallery" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Swiper
                    className={styles.swiperContainer}
                    spaceBetween={100}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },

                        900: {
                            slidesPerView: 2,
                            spaceBetween: 100,
                        },
                        1204: {
                            slidesPerView: 2,
                            spaceBetween: 250,
                        },
                    }}
                    // autoplay to be in the homepage for mobile scroll
                    // autoplay={{
                    //     delay: 500,
                    //     disableOnInteraction: true,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    mousewheel={true}
                    modules={[Mousewheel, Pagination, Autoplay, Navigation]}
                >
                    {artworks.data?.map((art) => {
                        return (
                            <SwiperSlide
                                key={art.id}
                                className={styles.swiperSlide}
                            >
                                <Link href={`/artworks/${art.id}`}>
                                    <div className={styles.artContainer}>
                                        <a className={styles.art}>
                                            <Image
                                                src={fromImageToUrl(
                                                    art.attributes.image
                                                )}
                                                alt={art.attributes.Title}
                                                layout="fill"
                                                className={styles.image}
                                            />
                                        </a>
                                        <div className={styles.details}>
                                            <p className={styles.title}>
                                                {art.attributes.Title}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </Layout>
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
