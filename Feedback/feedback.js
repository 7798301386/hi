import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Link } from "react-router-dom";
import FeedbackIcon from "@material-ui/icons/Feedback";
import SendIcon from "@material-ui/icons/Send";
import HoverRating from "./rating";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">FEEDBACK</h2>
      <p id="simple-modal-description">
        Your feedback is very important for us!
      </p>
      <HoverRating />
      <br />
      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={5}
        placeholder="Write something....."
      />
      <br />
      <Button
        className="submitbtn"
        variant="contained"
        color="primary"
        startIcon={<SendIcon />}
      >
        SEND
      </Button>
    </div>
  );

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        href="#contained-buttons"
        startIcon={<FeedbackIcon />}
      >
        FeedBack
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
