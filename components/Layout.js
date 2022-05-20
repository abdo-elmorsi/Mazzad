import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
    Container,
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
    Link,
    createTheme,
    CssBaseline,
    ThemeProvider,
} from "@mui/material";
import useStyles from "../utils/styles";
export default function Layout({ title, description, children }) {
    const theme = createTheme({
        typography: {
            h1: {
                fontSize: "1.6rem",
                fontWeight: 400,
                margin: "1rem 0",
            },
            h2: {
                fontSize: "1.4rem",
                fontWeight: 400,
                margin: "1rem 0",
            },
        },
        palette: {
            type: "light",
            primary: {
                main: "#f0c000",
            },
            secondary: {
                main: "#208080",
            },
        },
    });
    const classes = useStyles();
    return (
        <>
            <Head>
                <title>{title ? `${title} - Mazzad` : "Mazzad"}</title>
                {description && (
                    <meta name="description" content={description}></meta>
                )}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <NextLink href="/" passHref>
                            <Link sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="h5"
                                    className={classes.brand}
                                >
                                    Mazzad
                                </Typography>
                            </Link>
                        </NextLink>
                        {/* <div>f</div> */}
                        <div>
                            <NextLink href="/cart" passHref>
                                <Link>Cart</Link>
                            </NextLink>
                            <NextLink href="/login" passHref>
                                <Link>Login</Link>
                            </NextLink>
                        </div>
                    </Toolbar>
                </AppBar>
                <Container className={classes.main}>{children}</Container>
                <footer className={classes.footer}>
                    <Typography>
                        All rights reserved.{" "}
                        <Link href="https://elmorsy.vercel.app/">Abdo</Link>
                    </Typography>
                </footer>
            </ThemeProvider>
        </>
    );
}
