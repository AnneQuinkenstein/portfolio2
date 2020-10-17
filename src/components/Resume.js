import React from "react";
import { useMediaPredicate } from "react-media-hook";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import RespNavbar from "./RespNavbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "linear-gradient(to bottom, rgba(34, 40, 51, 0.3), #222833d4)",
    height: '100vh',
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    marginRight: "1rem",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "94%",
      border: "1px solid rgb(48, 128, 214)",
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
    borderBottom: "2px solid rgb(48, 128, 214)",
    position: "relative",
    margin: "0",
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
      borderColor:
        "rgb(19, 90, 157) rgb(19, 90, 157) transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "41%",
      margin: "1.5rem 5vw",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1.5rem 5vw",
        borderColor: "rgb(48, 128, 214)",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor:
          "transparent transparent rgb(19, 90, 157) rgb(19, 90, 157)",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.6rem",
    background: "rgb(19, 90, 157)",
    color: "white",
    lineHeight: 1,
    padding: "0.3rem 0 0.7rem",
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
    padding: "1rem 0 0 0",
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
  const phone = useMediaPredicate("(max-width: 1000px)");

  return (
    <>
      <Box component="header" className={classes.mainContainer} style={{ overflow: !phone && "hidden" }}>
         {phone && <RespNavbar />}
        <div style={{ height: '7vh' }}></div>
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
            today
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              Quality Assurance Process Development
            </Typography>
            <Typography variant="body1" style={{ color: "#26bef8" }}>
              Test Manager
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: "rgb(193, 227, 240)" }}
            >
              Responsible for Quality Assurance Department<br/>Introduced agile
              Testing and designed integration of business teams
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            {" "}
            2017{" "}
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              Testmanagement CRM, Billing, ERP & other Systems
            </Typography>
            <Typography variant="body1" style={{ color: "#26bef8" }}>
              Consultant Quality Management & Process Management 
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: "rgb(193, 227, 240)" }}
            >
              Created the Quality Assurance Department in cooperation with
              colleges and implemented a continuous improvement process
              utilizing HP ALM & JIRA <br/> 
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            {" "}
            2014
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              Functional Software Testing
            </Typography>
            <Typography variant="body1" style={{ color: "#26bef8" }}>
              Senior QA Test Analyst 
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: "rgb(193, 227, 240)" }}
            >
            Tested & Investigated root cause of issues 
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            {" "}
            2013
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
