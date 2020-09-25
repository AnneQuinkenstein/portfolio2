import React, { useState } from 'react';
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
    Box
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../images/avatar.png';
import MobileRightMenuSlider from '@material-ui/core/Drawer'

//CSS Styles

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: 'black',
        height: '100%',
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: 'yellow',
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'CV',
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio',
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contacts',
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })



    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };

    const classes = useStyles();

    const sideList = slider => {
        return (
            <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider('right', false)}>
                <Avatar className={classes.avatar} src={avatar} alt="Anne Quinkenstein" />
                <Divider />
                <List>
                    {menuItems.map((lsItem, key) => (
                        <ListItem button key={key}>
                            <ListItemIcon className={classes.listItem}>
                                {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText className={classes.listItem} primary={lsItem.listText} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        )
    }

    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: 'black' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <ArrowBack style={{ color: 'yellow' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: 'yellow' }}>
                            Portfolio
                    </Typography>
                        <MobileRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider('right', false)}>
                            {sideList('right')}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar; 
