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
              <CardActionArea  href="https://game-night-aquin.netlify.app/"
                  target="_blank">
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Game Site with React || Context || SCSS || HTML5
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  > Game Night is to have fun alone or with friends, even through a pandemic. You can play a hangman game with movie titles and when guessing wrong you get to see a giphy - so loosing it not so bad. 
                  I used Context for the project to handle passing the logic of the game all around. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary"  href="https://github.com/AnneQuinkenstein/game_night"
                  target="_blank">
                  {" "}
                  Code
                </Button>
                <Button
                  size="small"
                  href="https://game-night-aquin.netlify.app/"
                  target="_blank"
                  color="primary"
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
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    ECommerce Site with React || Router6 
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    lorem3 asdfkl ölkjas fölkj aöldkfj asdfökljasöldfkj ölaksjdf
                    lk
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/AnneQuinkenstein/animals_choice"
                  target="_blank">
                  {" "}
                  Code
                </Button>
                <Button size="small" color="primary"  href="https://aquin-animals-choice.netlify.app/"
                  target="_blank">
                  {" "}
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 3"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    lorem3 asdfkl ölkjas fölkj aöldkfj asdfökljasöldfkj ölaksjdf
                    lk
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  {" "}
                  Share
                </Button>
                <Button size="small" color="primary">
                  {" "}
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 4"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 4
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    lorem3 asdfkl ölkjas fölkj aöldkfj asdfökljasöldfkj ölaksjdf
                    lk
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  {" "}
                  Share
                </Button>
                <Button size="small" color="primary">
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