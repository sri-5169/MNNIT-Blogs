import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import Carousel from "react-material-ui-carousel";
import { items } from "./BannerData";
const useStyles = makeStyles({
  component: {
    width: "70vw",
    height: "60vh",
    justifyItems: "center",
    marginLeft: "15%",
  },
  slider: {
    height: "100%",
  },
  image: {
    width: "70vw",
    height: "60vh",
    justifySelf: "center",
  },
});
const Banner = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.component}>
        <Carousel
          className={classes.slider}
          autoPlay={true}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
          navButtonsProps={{
            style: {
              background: "white",
              color: "#494949",
              borderRadius: "0",
              margin: "0",
              height: "80px",
            },
          }}
        >
          {items.map((item) => (
            <img src={item.source} className={classes.image} alt="" />
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Banner;
