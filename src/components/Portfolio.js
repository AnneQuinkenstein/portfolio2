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
import Navbar from "./Navbar";
import project1 from "../images/gamenight.png";
import project2 from "../images/exommerce.png";
import project3 from "../images/weatherapp.png";
import project4 from "../images/nottodolist.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#222833d4",
    height: "100%",
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
        <Navbar />
        <Grid container justify="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href="https://game-night-aquin.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
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
                    Language! For each wrong guess a associated giphy is
                    revealed - failure is not bad :) If you win, a Giphy
                    Carousel is wating fo you. I used Context to pass the logic
                    of the game & did some animations utilizing SCSS - will you
                    find a easteregg? With Formspree the Input of the
                    Contactform is sent to my Email.
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
              </CardActions>
            </Card>
          </Grid>
          {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href="https://weather-aquin.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="Project 3"
                  height="140"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    React || Geo Location || React Animation Group
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    If you allow to grab your Location or type in a City of your
                    Choice, Weather or not will display the weather of today in
                    a moving cloud & a 5 days forecast A picture of the weather
                    accourding day or nighttime will appear in the background.
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
          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href="https://aquin-animals-choice.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project2}
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
                    ECommerce Site stuffed with animal toys provided by HEROKU
                    API. Display Item on single Page with Router. Add and delete
                    an Item from the Cart + monitor the total Price.
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
          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea
                href="https://aquin-todolist.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  component="img"
                  alt="Project 4"
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    React || Strapi || Animation Groups
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    CRUD Create, Update & Delete PostIt's to personalize your
                    Not to Do List! A Whiteboard with a lot of Not to do
                    PostIt's - getting rid of Duties might be a Duty as well.
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
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
