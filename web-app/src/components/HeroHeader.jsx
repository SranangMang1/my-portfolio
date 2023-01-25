import React from "react";
import { Paper } from "@mui/material";
// import { makeStyles } from "tss-react/mui";
import { makeStyles } from "@mui/styles";
// import logo from "../src/logo.svg";
// web-app\src\logo.svg

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100vh",
    // backgroundImage: "(https://tinyurl.com/2p89cnxu)",
    backgroundImage: "url(/images/CoffeeCupBackGroundBanner.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function HeroHeader() {
  const styles = useStyles();
  return <Paper className={styles.section}>Hero header</Paper>;
}
