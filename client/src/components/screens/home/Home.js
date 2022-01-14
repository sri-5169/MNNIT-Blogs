import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Banner from "./banner/Banner";
const useStyles = makeStyles({
  collab: {
    fontSize: 70,
    color: "green",
    lineHeight: 1,
  },
  subheading: {
    fontSize: 20,
    background: "#FFFFFF",
  },
});
function Home() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.collab}>Collab</Typography>
      <Typography className={classes.subheading}>MNNITian</Typography>
      <Banner />
      Home
    </div>
  );
}

export default Home;
