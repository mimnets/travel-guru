import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {tLocation} from '../../components/Home/Home';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 380,
    width: 380

  },
});


const Spot = () => {
    const classes = useStyles();
    const {destination} = useParams();
    const {imgUrl,description} = tLocation.find(element => element.destination.toString() === destination.toString());
    const history = useHistory();
    const handleBooking = (destination) =>{
        history.push(`/booking/${destination}`)
    }
    return (
        <div style={{display: 'flex', justifyContent:'center'}}> 
            
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {destination}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <Button size="medium" color="default" onClick={() => {handleBooking(destination)}}>Booking</Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default Spot;