import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: "#203040",
        "& a": {
            color: "#fff",
            marginLeft: 10,
        },
    },
    brand: {
        fontWeight: "bold",
        fontSize: "1.5rem",
    },
    main: {
        minHeight: "80vh",
    },
    footer: {
        backgroundColor: "#203040",
        marginTop: 10,
        textAlign: "center",
        paddingTop: "7px",
        paddingBottom: "7px",
        "& span": {
            color: "#FFF",
        },
    },
    section: {
        marginTop: 10,
        marginBottom: 10,
    },
});

export default useStyles;
