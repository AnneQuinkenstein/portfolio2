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
import nottodolist from "../images/nottodolist.png";
import NokiaHackathon from "../images/NokiaHackathon.png";
import remoteSchool from "../images/remoteSchool.png";

const useStyles = makeStyles({
  mainContainer: {
    background:
      "linear-gradient(to bottom, rgba(34, 40, 51, 0),rgba(34, 40, 51, 0.3))",
    height: "min-content",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio2 = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Project 4 Nokia Hackathon */}
          <Grid item xs={12} sm={8} md={4}>
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
                    NOKIA Hackaton: Create a working landing page for Nokia
                    Feature Phones using a NOKIA phone API in 24 hours with your
                    2 teammates (Desctop Version)! Done!
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
          <Grid item xs={12} sm={8} md={4}>
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
          <Grid item xs={12} sm={8} md={4}>
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

export default Portfolio2;
