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
            fill: "tan", 
            "&:hover": {
                fill: 'tomato', 
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
      ></BottomNavigationAction>
       <BottomNavigationAction
       className={classes.root}
      style={{padding: 0}}
      icon={<GitHubIcon/>}
      ></BottomNavigationAction>
       <BottomNavigationAction
      className={classes.root}
      style={{padding: 0}}
      icon={<ChromeReaderModeIcon/>}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default Footer;
