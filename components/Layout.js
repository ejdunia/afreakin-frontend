import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import React from "react";

const Layout = ({ title, keywords, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <div className="content">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
};
Layout.defaultProps = {
    title: "Afreakin | Art, Fashion and Custom merc ",
    description: "Your one stop for art, fashion and zoid",
    keywords:
        "art, online store, ecommerce, shop, artists, arcrylic, fashion, gallery, merc, custom merc, jean jackets, custom apparel",
};

export default Layout;
