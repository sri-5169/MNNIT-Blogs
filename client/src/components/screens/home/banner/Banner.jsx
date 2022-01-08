import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  image: {
    width: "80%",
    // backgroundImage: `url(${'https://cdn.pixabay.com/photo/2021/02/01/06/48/geometric-5969509_960_720.png'}) `,
    backgroundImage: `url(${"https://image3.mouthshut.com/images/Restaurant/Photo/-85198_133528.jpg"}) `,
    backgroundSize: "100%,100%",
    backgroundPosition: "right, left",
    height: "50vh",
    marginTop: "20vh",
    marginLeft: "100px",
    marginRight: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 70,
      color: "#FFFFFF",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 20,
      background: "#FFFFFF",
    },
  },
});
const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography>Collab</Typography>
      <Typography>With MNNITians</Typography>
    </Box>
  );
};

export default Banner;
