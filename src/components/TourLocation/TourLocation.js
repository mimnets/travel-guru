import { Card, CardHeader, CardMedia, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      height: 380, 
      width: 250,
      flexGrow: 0,
      margin: 10
    },
    media: {
      height: '100%',
      width: '100%',
    },
    overlay:{
        position: 'absolute',
        paddingTop: 300,
        stroke: 'bold',
        color: 'white'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      paddingLeft:20,
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }));

const TourLocation = ({tourSpot}) => {
    const classes = useStyles();
    const history = useHistory()
    const handleBook = (destination) => {
        history.push(`/spot/${destination}`);
    }  
    return (
        <div>
        <Grid container justify = "flex-end">

        <Card className={classes.root} onClick={() => handleBook(tourSpot.destination)}>
            <CardHeader className={classes.overlay}
            title={tourSpot.title}
            />
            <CardMedia
            className={classes.media}
            image={tourSpot.imgUrl}
            title={tourSpot.title}
            />

        </Card>
        </Grid>
        </div>
    );
};

export default TourLocation;