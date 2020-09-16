import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Coxbazar from '../../images/Rectangle1.png'; 
import Sreemongol from '../../images/Sreemongol.png';
import Sundorbon from '../../images/sundorbon.png'
import { CardHeader, Grid } from '@material-ui/core';
const Home = () => {
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
      const classes = useStyles();
    return (
        
        
        <Grid container justify = "flex-end">

        <Card className={classes.root}>
        <CardHeader className={classes.overlay}
        title="COX'S BAZAR"
      />
            <CardMedia
        className={classes.media}
        image={Coxbazar}
        title="COX'S BAZAR"
      />
      
        </Card>

  <Card className={classes.root}>
            <CardMedia
        className={classes.media}
        image={Sreemongol}
        title="Paella dish"
      />
        </Card>

  <Card className={classes.root}>
            <CardMedia
        className={classes.media}
        image={Sundorbon}
        title="Paella dish"
      />
        </Card>
</Grid>


    );
};

export default Home;