import Link from "next/link";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";
import AFlogo from "../public/vercel.svg";
import Image from "next/image";
const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const quantity = useSelector((state) => state.cart.totalQuantity);
    const handleClick = () => {
        setVisible((visible) => !visible);
    };
    return (
        <header className={`${styles.flex} ${styles.header}`}>
            <div className={styles.logo}>
                <Image src={AFlogo} fill alt="logo" />
            </div>
            <button
                aria-controls="primaryNav"
                aria-expanded={visible}
                className={styles.mobileToggle}
                onClick={handleClick}
            ></button>
            <nav>
                <ul
                    id="primaryNav"
                    data-visible={visible}
                    className={`${styles.flex} ${styles.PrimaryNav}`}
                >
                    <li>
                        {" "}
                        <Link href="/">
                            <a>HOME</a>
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link href="/products">
                            <a>STORE</a>
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link href="/artworks">
                            <a>GALLERY</a>
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link href="#">
                            <a>EVENTS</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>ABOUT</a>
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link href="/auth">
                            <a>AUTH</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart">
                            <a>
                                <IconButton
                                    aria-label="cart"
                                    onClick={() =>
                                        console.log("cart icon clicked")
                                    }
                                    sx={{ fontSize: "2rem", color: "#31093e" }}
                                >
                                    <ShoppingCartIcon
                                        sx={{
                                            fontSize: "2rem",
                                            color: "#31093e",
                                        }}
                                    />
                                    <p>{quantity}</p>
                                </IconButton>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
