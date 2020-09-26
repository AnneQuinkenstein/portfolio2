import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import axios from "axios";

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
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const classes = useStyles("");

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/maypzkgy",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <>
      <Box component="div" style={{ background: "#222833d4", height: "100vh" }}>
        <Navbar />
        <Grid container justify="center">
          <Box component="form" className={classes.form} onSubmit={handleOnSubmit}>
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
              id="message" name="message"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
              type="email"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
              id="message" name="message"
            />
            <br />
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
              type="submit" disabled={serverState.submitting}
            >
              {" "}
              contact me
            </Button>
            {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""} className='successMsg' >
            {serverState.status.msg}
          </p>
        )}
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
