import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  root: {
    maxWidth:1100 ,
    },
  
});

export default function DocCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
       
        <CardContent><p>
          <img src="https://source.unsplash.com/random/200x250" height="250px" width="200px" align="right"/>
          <Typography gutterBottom variant="h3" component="h2">
            Dr. Name
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
         
            Education:
            <br/>Charges:<br/>Location:<br/>Contact No:
           </Typography></p>
           <div className="btns">
              <Button className="btn"  variant="contained" color="primary">
            Accept
        </Button>
         <Button variant="contained" className="btn" color="secondary">
            Decline
        </Button></div>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}