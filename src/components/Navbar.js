import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/logo.png";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";

//CSS Styles

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "black",
    height: "100%",
  },
  avatar: {
    display: "block",
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: theme.spacing(5),
  },
  listItem: {
    color: "#26bef8",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => {
    return (
      <Box
        className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider("right", false)}
      >
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Anne Quinkenstein"
        />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "black" }}>
          <Toolbar style={{ justifyContent: "flex-end" }}>
            <IconButton onClick={toggleSlider("right", true)}>
              <Typography variant="h5" style={{ color: "#3080d6", margin: "0 200px 0 auto" }}>
                explore
              </Typography>
            </IconButton>
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer/>
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
