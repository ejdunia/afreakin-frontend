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

const ProductCard = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 350 }} elevation={1}>
            <CardActionArea>
                <Link href={`/products/${product.id}`}>
                    <a>
                        <CardMedia sx={{ maxWidth: 350 }}>
                            <Image
                                src={fromImageToUrl(product.attributes.image)}
                                alt="image"
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="cover"
                            />
                        </CardMedia>
                        <CardHeader
                            overflow="hidden"
                            title={product.attributes.name}
                            subheader={`N${toTwoDP(product.attributes.price)}`}
                            subheaderTypographyProps={{
                                fontSize: "2rem",
                                color: "black",
                            }}
                            titleTypographyProps={{ fontSize: "2.5rem" }}
                        />{" "}
                    </a>
                </Link>
            </CardActionArea>
            <CardActions>
                <IconButton aria-label="cart">
                    <ShoppingCartIcon sx={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon sx={{ fontSize: "3rem" }} />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
