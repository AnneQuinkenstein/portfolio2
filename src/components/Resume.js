import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#222833d4",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #26bef8",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "50%",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #26bef8",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "rgb(48, 128, 214) rgb(48, 128, 214) transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#26bef8",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent rgb(48, 128, 214) rgb(48, 128, 214)",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "rgb(48, 128, 214)",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "rgb(48, 128, 214)",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          {" "}
          working experience{" "}
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            {" "}
            2013{" "}
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              webdesign
            </Typography>
            <Typography variant="body1" style={{ color: "#26bef8" }}>
              web design lkaösfjölskdj f
            </Typography>
            <Typography variant="subtitle1" style={{ color: "rgb(193, 227, 240)" }}>
              Lorem ipsum akl sf ljlaösdfk lkj ölfakj aslkfjlkasdlfkj
              alksdjflkajdfölkljhfakjhakljf ljsdfl
              sdafkjlsdlöakjfölaksjdfölkjsaölfkjölkajdsfljslkdfj
              asdlfkjölsakjflkjsdf
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            {" "}
            2013{" "}
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              css & html
            </Typography>
            <Typography variant="body1" style={{ color: "#26bef8" }}>
              web design lkaösfjölskdj f
            </Typography>
            <Typography variant="subtitle1" style={{ color: "rgb(193, 227, 240)" }}>
              Lorem ipsum akl sf ljlaösdfk lkj ölfakj aslkfjlkasdlfkj
              alksdjflkajdfölkljhfakjhakljf ljsdfl
              sdafkjlsdlöakjfölaksjdfölkjsaölfkjölkajdsfljslkdfj
              asdlfkjölsakjflkjsdf
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
