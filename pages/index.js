import NextLink from "next/link";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Layout from "../components/Layout";
import data from "../utils/data";
import Image from "next/image";
export default function Home() {
    return (
        <Layout>
            <h1>Products</h1>
            <Grid container spacing={4}>
                {data?.products.map((product, i) => {
                    return (
                        <Grid key={i} item xs={12} sm={6} md={4}>
                            <Card>
                                <NextLink
                                    href={`/product/${product.slug}`}
                                    passHref
                                >
                                    <CardActionArea className="test">
                                        {/* <CardMedia
                                            component="img"
                                            image={product.image}
                                            title={product.title}
                                        ></CardMedia> */}
                                        <Image
                                            width="100%"
                                            height="100%"
                                            layout="responsive"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                        <CardContent>
                                            <Typography>
                                                {product.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </NextLink>
                                <CardActions>
                                    <Typography>${product.price}</Typography>
                                    <Button size="small" color="primary">
                                        Add to cart
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Layout>
    );
}
