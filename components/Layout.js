import Navbar from "./Navbar";
import Footer from "./Footer";

import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
