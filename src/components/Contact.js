import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "#3080d6",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3080d6",
      },
      "&:hover fieldset": {
        borderColor: "#3080d6",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3080d6",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" style={{ background: "#222833d4", height: "100vh" }}>
        <Navbar />
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography
              variant="h5"
              style={{
                color: "tomato",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              hire or contact me ...
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Company name"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              contact me
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
