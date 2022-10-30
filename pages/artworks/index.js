import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/Gallery.module.css";

export default function Artworks({ artworks }) {
    return (
        <div className={styles.gallery}>
            <Head>
                <title>Artworks</title>
                <meta name="description" content="Afreakin Art Gallery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Gallery</h1>
            <div>
                <Swiper
                    spaceBetween={100}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
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
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Mousewheel, Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {/* todo checkout how to mpve the navigation buttons to the bottom */}
                    {artworks.data?.map((art) => {
                        return (
                                <SwiperSlide key={art.id}>
                                    <Link
                                        href={`/artworks/${art.id}`}
                                        className={styles.artwork}
                                    >
                                        <a className={styles.anchor}>
                                            <Image
                                                src={fromImageToUrl(
                                                    art.attributes.image
                                                )}
                                                alt={art.attributes.name}
                                                width="623px"
                                                height="675px"
                                                // layout="responsive"
                                                objectFit="contain"
                                                // objectFit="cover"
                                                object-position="top"
                                                className={styles.image}
                                            />
                                            <div>{art.attributes.name} </div>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                        );
                    })}
                </Swiper>
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
