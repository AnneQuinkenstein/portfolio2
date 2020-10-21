import React from "react";
import {
  AppBar,
  Toolbar,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Box,
  Link,
} from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/logo.png";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

//CSS Styles

const useStyles = makeStyles({
  avatar: {
    display: "block",
    width: '40px',
    height: '50px',
  },
  link: {
    width: "6%",
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "3rem",
    "&:hover": {
      textDecoration: "none",
    },
  },
  listItem: {
    color: "lightgrey",
    minWidth: "35px",
  },
  root: {
    minWidth: "50px",
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "lightgrey",
      "&:hover": {
        fill: "#26bef8",
        fontSize: "1.8rem",
      },
    },
  },
});

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "#Home",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "#Portfolio",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "#Resume",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "#Contact",
  },
];

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="nav" className={classes.navbar}>
        <AppBar style={{ background: "black", opacity: "0.8" }}>
          <Toolbar style={{ justifyContent: "center" }}>
            <BottomNavigation
              width="auto"
              style={{ background: "transparent", marginRight: "auto" }}
            >
              <Avatar
                className={classes.avatar}
                src={avatar}
                alt="Anne Quinkenstein"
              />
              <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/anne-quinkenstein"
                target="_blank"
                rel="noopener noreferrer"
              ></BottomNavigationAction>
              <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<GitHubIcon />}
                href="https://github.com/annequinkenstein"
                target="_blank"
                rel="noopener noreferrer"
              ></BottomNavigationAction>
              <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<ChromeReaderModeIcon />}
                href="https://dev.to/annequinkenstein"
                target="_blank"
                rel="noopener noreferrer"
              ></BottomNavigationAction>
            </BottomNavigation>
            <Divider />
            {menuItems.map((lsItem, key) => (
              <Link key={key} href={lsItem.listPath} className={classes.link}>
                <ListItemIcon className={classes.listItem}>
                  {lsItem.listIcon}
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary={lsItem.listText}
                />
              </Link>
            ))}
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  );
};

export default Navbar;
