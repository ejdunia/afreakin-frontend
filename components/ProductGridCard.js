import Link from "next/link";
import Image from "next/image";
import { Card, Typography } from "@mui/material";
import { fromImageToUrl } from "../utils/urls";
import { toTwoDP } from "../utils/format";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
// import Head from "next/head";
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addToCart({ product }));
    };

    return (
        <Card sx={{ maxWidth: "30rem" }} elevation={1}>
            <CardActionArea>
                <Link href={`/products/${product.id}`}>
                    <a>
                        <CardMedia>
                            <Image
                                src={fromImageToUrl(product.attributes.image)}
                                alt={product.attributes.name}
                                width="7rem"
                                height="7rem"
                                layout="responsive"
                                objectFit="cover"
                                // change objectFit to contain on hover
                            />
                        </CardMedia>
                        <CardHeader
                            title={
                                <Typography
                                    noWrap
                                    fontSize="2rem"
                                    // display="inline-block"
                                >
                                    {product.attributes.productName}
                                </Typography>
                            }
                            subheader={
                                <Typography fontSize="2rem">
                                    {`₦${toTwoDP(product.attributes.price)}`}
                                </Typography>
                            }
                        />{" "}
                    </a>
                </Link>
            </CardActionArea>
            <CardActions>
                <IconButton aria-label="cart" onClick={addToCart}>
                    <ShoppingCartIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
