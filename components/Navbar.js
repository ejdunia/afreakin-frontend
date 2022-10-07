import Link from "next/link";
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>afreakin logo</h1>
            </div>
            <Link href="/">
                <a>HOME</a>
            </Link>
            <Link href="products">
                <a>STORE</a>
            </Link>
            <Link href="artworks">
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
        </nav>
    );
};

export default Navbar;
