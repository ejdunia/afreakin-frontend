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
        <div className={styles.gallerybg}>
            <Head>
                <title>Artworks</title>
                <meta name="description" content="Afreakin Art Gallery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.gallery}>
                <Swiper
                    className={styles.swiperContainer}
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
                    keyboard={{ enabled: true }}
                    navigation={true}
                    mousewheel={true}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Mousewheel, Pagination, Autoplay, Navigation]}
                    // className="mySwiper"
                >
                    {/* todo checkout how to mpve the navigation buttons to the bottom */}
                    {artworks.data?.map((art) => {
                        return (
                            <SwiperSlide key={art.id} className={styles.artcontainer}>
                                <Link href={`/artworks/${art.id}`}>
                                    <div className={styles.art}>
                                        <a className={styles.anchortag}>
                                            <Image
                                                src={fromImageToUrl(
                                                    art.attributes.image
                                                )}
                                                alt={art.attributes.name}
                                                width="350px"
                                                height="300px"
                                                layout="responsive"
                                                // layout="fill"
                                                objectFit="contain"
                                                // objectFit="cover"
                                                // object-position="top"
                                                className={
                                                    styles.imagecontainer
                                                }
                                            />
                                            <div>{art.attributes.name} </div>
                                        </a>
                                    </div>
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
