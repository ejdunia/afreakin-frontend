import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.totalQuantity);
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
                <Link href="/artworks">
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
                <Link href="/cart">
                    <a>
                        <IconButton
                            aria-label="cart"
                            onClick={() => console.log("cart icon clicked")}
                            sx={{ fontSize: "3rem", color: "#31093e" }}
                        >
                            <ShoppingCartIcon
                                sx={{ fontSize: "3rem", color: "#31093e" }}
                            />{" "}
                            <p>{quantity}</p>
                        </IconButton>
                    </a>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
