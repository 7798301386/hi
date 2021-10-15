import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import "./requests.css";
import firebase from "../firebase";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion(props) {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openReject, setOpenReject] = React.useState(false);

  const classes = useStyles();
  const [user, setUser] = useState({
    username: "",
    age: 0,
    education: "",
    location: "",
    contact: 0,
    email: "",
    charge: 0,
  });

  const { data } = props;
  const setuserData = () => {
    setUser({
      ...user,
      username: data.name,
      age: data.age,
      education: data.education,
      location: data.location,
      contact: data.contact,
      email: data.email,
      charge: data.charge,
    });
  };
  var db = firebase.firestore();
  const onAccept = () => {
    db.collection("doctors")
      .doc(user.email)
      .set(user)
      .then(() => {
        db.collection("requests").doc(user.email).delete();
      })
      .catch((error) => {
        alert(error.message);
      });
    setOpenSuccess(true);
  };
  useEffect(() => {
    setuserData();
  });
  const onDecline = () => {
    db.collection("requests").doc(user.email).delete().then("rejected");
    setOpenReject(true);
  };
  function AlertSnack(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenReject(false);
  };
  return (
    <div className={classes.root}>
      <Accordion>
        <div className="row">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Dr. {user.username}
            </Typography>
          </AccordionSummary>
        </div>
        <div className="info">
          <AccordionDetails>
            <div className="fields">
              <div className="field1">
                <img
                  src="https://source.unsplash.com/random/200x200"
                  height="180px"
                  width="200px"
                />
              </div>

              <div className="field2">
                <h2>Dr. Name:{data.name}</h2>
                <span>Education:{data.education}</span>
                <span>Charge:{data.charge}/-</span>

                <div className="field3">
                  <span>Location:{data.location}</span>
                  <span> Contact No:{data.contact}</span>
                </div>

                <div className="field4">
                  <span>Email Id:{data.email}</span>
                </div>
              </div>

              <div className="btns">
                <Button
                  className="btn"
                  variant="contained"
                  color="primary"
                  onClick={onAccept}
                >
                  Accept
                </Button>
                <Button
                  variant="contained"
                  className="btn"
                  color="secondary"
                  onClick={onDecline}
                >
                  Decline
                </Button>
              </div>
            </div>
          </AccordionDetails>
        </div>
      </Accordion>
      <Snackbar
        open={openSuccess}
        autoHideDuration={2000}
        onClose={handleCloseSnack}
      >
        <AlertSnack onClose={handleCloseSnack} severity="success">
          Request Accepted!
        </AlertSnack>
      </Snackbar>
      <Snackbar
        open={openReject}
        autoHideDuration={2000}
        onClose={handleCloseSnack}
      >
        <AlertSnack severity="error" onClose={handleCloseSnack}>
          Request Rejected!
        </AlertSnack>
      </Snackbar>
    </div>
  );
}
