import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import gamenight from "../images/gamenight.png";
import animalsChoice from "../images/ecommerce.png";
import weatherapp from "../images/weatherapp.png";
import nottodolist from "../images/nottodolist.png";
import NokiaHackathon from "../images/NokiaHackathon.png";
import remoteSchool from "../images/remoteSchool.png";
import RespNavbar from "./RespNavbar";

const useStyles = makeStyles({
  mainContainer: {
    background:
      "linear-gradient(to bottom, rgba(34, 40, 51, 0),rgba(34, 40, 51, 0.3))",
    height: "min-Content",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <RespNavbar /> 
        <Grid container justify="center">
          {/* Project 1 Gamenight */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href="https://game-night-aquin.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="Gamenight Frontpage"
                  height="140"
                  image={gamenight}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    React || Context || SCSS || openAPI
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {" "}
                    Play a hangman game with movie titles in your favorite
                    language! For each wrong guess a associated Giphy is
                    revealed - failure is not bad :) If you win, a movieposter & gifs
                    carousel is wating fo you. I used Context as a state
                    container & did some animations utilizing SCSS - will you
                    find an easteregg? With Formspree the input of the
                    contact form is sent to my email.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/AnneQuinkenstein/game_night"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://game-night-aquin.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Live Demo
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://app.box.com/s/2mbfie0ysains6t0ckd4nggvz6qlj46a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Presentation
                </Button>
              </CardActions>
            </Card>
          </Grid>
            {/* Project 2 - Weatherapp */}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href="https://weather-aquin.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="Weatherapp Frontpage"
                  height="140"
                  image={weatherapp}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    React || Geo Location || React Transition Group
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    If the app is allowed to grab your device` location or type in a city
                    of your choice, the WeatherApp will display the weather of
                    today in a moving cloud and a 5-days forecast. A picture of
                    the weather accourding to day- or nighttime will appear in
                    the background.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/AnneQuinkenstein/weather_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://weather-aquin.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 3 Animals Choice */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href="https://aquin-animals-choice.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="Project ecommerce Frontpage"
                  height="140"
                  image={animalsChoice}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    React || Router V6 || Material UI
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    ECommerce site stuffed with animal toys provided by Heroku
                    API. Display an item on a single page with new Router V6. Add and
                    delete items everywhere in the app & monitor the total price.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/AnneQuinkenstein/animals_choice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://aquin-animals-choice.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 4 Nokia Hackathon */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href="https://hackaton-group2-deploy-nokia.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="NokiaHackathon Frontpage"
                  height="140"
                  image={NokiaHackathon}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    React || NOKIA API || 24h Hackathon
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    NOKIA Hackaton: Create a working landing page for Nokia Feature Phones using
                    a NOKIA phone API in 24 hours with your 2 teammates (Desctop Version)! Done!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/nokia-hackathon-group2/nokia-hackathon-group-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://hackaton-group2-deploy-nokia.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Live Demo
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://app.box.com/s/6ui78vy4qjoi95jsptw0rcht67wswl33"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Presentation
                </Button>
              </CardActions>
            </Card>
          </Grid>
             {/* Project 5 Not-to-doList*/}
             <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href="https://aquin-todolist.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="nottodolist"
                  height="140"
                  image={nottodolist}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    React || Strapi || Transition Group
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    CRUD Create, Update & Delete postIt's to personalize your
                    Not-to-Do-List! A whiteboard with a lot of Not-to-Do
                    postIt's - getting rid of duties might be a duty as well.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://aquin-todolist.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/AnneQuinkenstein/list"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 6 Remote-School */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href="https://annequinkenstein.github.io/remote-school/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="remoteSchool Frontpage"
                  height="140"
                  image={remoteSchool}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    HTML || CSS || FLEXBOX
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Code School Project to design and code a new School Page in
                    a Team
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/AnneQuinkenstein/remote-school"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://annequinkenstein.github.io/remote-school/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Live Demo
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://app.box.com/s/hco4oa2vede6igc1xfrg3lqy15sgep1f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Presentation
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
