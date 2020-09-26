import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles=makeStyles(theme=> ({
form: {
    top: '50%', 
    left: '50%', 
    position: 'absolute', 
    transform: 'translate(-50%, -50%)',
},
button: {
    marginTop: '1rem', 
    color: '#3080d6', 
    borderColor: '#3080d6', 
}
}))

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#3080d6",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset" : {
            borderColor: "tan",
        },
        '&:hover fieldset': {
            borderColor: 'tan', 
        },
        '&.Mui-focused fieldset': {
            borderColor: 'tan',
        },
    }
  },
})(TextField);

const Contact = () => {

const classes = useStyles(); 

  return (
    <>
      <Navbar />
      <Box component="div" style={{background: "#222833d4", height: '100vh'}}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" style={{color: '#3080d6', textAlign: 'center', textTransform: "uppercase"}}>hire or contact me ...</Typography>
            <InputField fullWidth={true} label="Name" variant="outlined" inputProps={{style: { color: "white"}}} margin="dense" size="medium" />
              <br/>
            <InputField fullWidth={true} label="Email" variant="outlined" 
            inputProps={{style: { color: "white"}}}
            margin="dense" size="medium" />
            <br/>
            <InputField fullWidth={true} label="Company name" variant="outlined"
            inputProps={{style: { color: "white"}}}
            margin="dense" size="medium"  />
          <br/>
          <Button className={classes.button}variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
              contact me
          </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
