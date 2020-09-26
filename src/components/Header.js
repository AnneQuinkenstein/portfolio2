import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../images/avatar.png';

//CSS Styles

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(35),
        height: theme.spacing(35),
        margin: theme.spacing(1),
    },
    title: {
        color: 'lightgrey',
    },
    subtitle: {
        color: '#3080d6',
        marginBottom: '7rem',
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1,
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify='center'>
                <Avatar className={classes.avatar} src={avatar} alt="pic Anne Quinkenstein" />
            </Grid>
               <Typography className={classes.title} variant="h4">
                <Typed strings={['Anne Quinkenstein']} typeSpeed={40} />
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={['Web Development', 'React.js', 'Javascript || HTML || CSS', 'Quality Assurance']} typeSpeed={40} backSpeed={50} loop />
            </Typography>  
        </Box>
    )
}

export default Header
