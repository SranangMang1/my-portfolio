import React from "react";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100vh",
    backgroundImage: "url(/images/CoffeeCupBackGroundBanner.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function HeroHeader() {
  const styles = useStyles();
  return <Paper className={styles.section}>Hero header</Paper>;
}
