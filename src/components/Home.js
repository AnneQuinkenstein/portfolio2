import React from 'react'
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
import RespNavbar from './RespNavbar';

//CSS STYLES
const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute',
        opacity: '0.5',
    },
    particle:{
        height: '90vh',
        width: '90vw',
        position: 'relative',
    }
})

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <RespNavbar />
            <Header />
            <Particles
                className={classes.particle}
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 0.1, 
                                color: 'tomato',
                            }
                        },
                        size: {
                            value: 8, 
                            random: true, 
                            anim: {
                                enable: true, 
                                speed: 5,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 0.2,
                            random: true, 
                            animation: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true,
                            }
                        }
                    }
                }} 
                />
        </>
    )
}

export default Home; 