import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h1>afreakin logo</h1>
                </div>
                <Link href="/">
                    <a>HOME</a>
                </Link>
                <Link href="/products">
                    <a>STORE</a>
                </Link>
                <Link href="/gallery">
                    <a>GALLERY</a>
                </Link>
                <Link href="#">
                    <a>EVENTS</a>
                </Link>
                <Link href="#">
                    <a>ABOUT</a>
                </Link>
                <Link href="/auth">
                    <a>AUTH</a>
                </Link>
                <IconButton
                    aria-label="cart"
                    onClick={() => console.log("cart icon clicked")}
                >
                    <ShoppingCartIcon sx={{ fontSize: "3rem", color: 'red' }} />
                </IconButton>
            </nav>
        </>
    );
};

export default Navbar;
