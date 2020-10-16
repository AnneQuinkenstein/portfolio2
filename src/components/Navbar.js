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

//CSS Styles

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "black",
    height: "100%",
  },
  avatar: {
    display: "block",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  link: {
    width: "6%",
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "3rem",
  },
  listItem: {
    color: "#26bef8",
    minWidth: "35px",
  },
}));

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
          <Toolbar style={{ justifyContent: "flex-start" }}>
            <Avatar
              className={classes.avatar}
              src={avatar}
              alt="Anne Quinkenstein"
            />
            <Divider />
            {menuItems.map((lsItem, key) => (
              <Link
                button
                key={key}
                href={lsItem.listPath}
                className={classes.link}
              >
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
