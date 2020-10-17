import React, { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";
import RespNavbar from "./RespNavbar";

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

  const phone = useMediaPredicate("(max-width: 1000px)");

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
      <Box component="div" style={{ height: "100vh", position: "relative", backgroundColor: "#222833d4", paddingBottom: 0, marginBottom: 0}}>
      {phone && <RespNavbar/>}
        <Grid container justify="center">
          <Box
            component="form"
            className={classes.form}
            onSubmit={handleOnSubmit}
          >
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
              id="message"
              name="message"
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
              id="email"
              name="email"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              multiline
              rowsMax={8}
              inputProps={{ style: { color: "white", height: '10vh' } }}
              margin="dense"
              size="medium"
              id="message"
              name="message"
            />
            <br />
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
              type="submit"
              disabled={serverState.submitting}
            >
              {" "}
              contact me
            </Button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : "successMsg"}>
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
