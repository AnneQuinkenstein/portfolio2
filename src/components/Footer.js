import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0, 
            maxWidth: 250, 
        },
        "& .MuiSvgIcon-root": {
            fill: "lightgrey", 
            "&:hover": {
                fill: '#26bef8', 
                fontSize: "1.8rem",
            }
        }
    }
})

const Footer = () => {

const classes = useStyles();

  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
      className={classes.root}
      style={{padding: 0}}
      icon={<LinkedInIcon/>}
      href="https://www.linkedin.com/in/anne-quinkenstein"
      target="_blank"
      rel="noopener noreferrer"
      ></BottomNavigationAction>
       <BottomNavigationAction
       className={classes.root}
      style={{padding: 0}}
      icon={<GitHubIcon/>}
      href="https://github.com/annequinkenstein"
      target="_blank"
      rel="noopener noreferrer"
      ></BottomNavigationAction>
       <BottomNavigationAction
      className={classes.root}
      style={{padding: 0}}
      icon={<ChromeReaderModeIcon/>}
      href="https://dev.to/annequinkenstein"
      target="_blank"
      rel="noopener noreferrer"
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default Footer;
