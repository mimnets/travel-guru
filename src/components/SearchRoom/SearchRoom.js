import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory, useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 200,
      height: 200,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));


const rooms = [
    {
        roomUrl: 'https://1.bp.blogspot.com/-2yX6J8pFLg4/X2ntFw7bxyI/AAAAAAAAoGs/zT5BiyLNkcI21jDs7-23HvRVCTHmX93AwCLcBGAsYHQ/s320/Rectangle%2B26.png',
        rating: '4 star',
        roomDesc:"Light bright airy style apt safe & peaceful stay",
        roomSpec:"4 guests 2 beadrooms 2 beds 2 baths Wi-Fi air conditioning Kitchen",
        price: 54
    },
    {
        roomUrl:'https://1.bp.blogspot.com/-v6PCWL7EnyA/X2ntF-2HBjI/AAAAAAAAoGo/IOnMbCh0hxAJYb3_67ufN5WahLpwOD4IgCLcBGAsYHQ/s320/Rectangle%2B27.png',
        rating: '4.5 star',
        roomDesc:"AR lounge and pool (R + R & B + B)",
        roomSpec:"4 guests 2 beadrooms 2 beds 2 baths Wi-Fi air conditioning Kitchen",
        price: 59
    },
    {
        roomUrl:'https://1.bp.blogspot.com/-guDIlcmOb9M/X2ntF44X9iI/AAAAAAAAoGw/hf0sk__Z7K8jK_ZTLSlqJoRoEsU46JTUACLcBGAsYHQ/s320/Rectangle%2B28.png',
        rating: '4.7 star',
        roomDesc:"Apartment in lost panaroma",
        roomSpec:"4 guests 2 beadrooms 2 beds 2 baths Wi-Fi air conditioning Kitchen",
        price: 60
    }
]

const SearchRoom = () => {
    const {destination} = useParams();

    const classes = useStyles();
    const room1 = rooms[0];
    const room2 = rooms[1];
    const room3 = rooms[2];
    return (
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>Stay in {destination}</Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={room1.roomUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography  variant="body2">
                  {room1.roomDesc}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {room1.roomSpec}
                </Typography>
                <Typography variant="body2">
                  {room1.rating}
                </Typography>
                <Typography variant="body2">
                  <span>${room1.price}</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={room2.roomUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography  variant="body2">
                  {room2.roomDesc}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {room2.roomSpec}
                </Typography>
                <Typography variant="body2">
                  {room2.rating}
                </Typography>
                <Typography variant="body2">
                  <span>${room2.price}</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={room3.roomUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography  variant="body2">
                  {room3.roomDesc}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {room3.roomSpec}
                </Typography>
                <Typography variant="body2">
                  {room3.rating}
                </Typography>
                <Typography variant="body2">
                  <span>${room3.price}</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
        
    );
};

export default SearchRoom;