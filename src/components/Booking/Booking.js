import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { tLocation } from '../Home/Home';
import SearchRoom from '../SearchRoom/SearchRoom';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    maxWidth: 345,
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
  },
  },
}));

//date 
const dateNow = new Date(); // Creating a new date object with the current date and time
const year = dateNow.getFullYear(); // Getting current year from the created Date object
const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
const month = // Setting current Month number from current Date object
  monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 to adjust for date input.
    ? `0${monthWithOffset}`
    : monthWithOffset;
const date =
  dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${dateNow.getUTCDate()}`
    : dateNow.getUTCDate();

const materialDateInput = `${year}-${month}-${date}`; // combining to format for defaultValue or value attribute of material <TextField>

const Booking = () => {

    const {destination} = useParams();
    const classes = useStyles();
    const history = useHistory();
    const submitBooking = (destination) => {
        history.push(`/search/${destination}`)
    }
    return (
        <div className={classes.container}>

            <form className={classes.root} noValidate autoComplete="off">
      <div>
        
      <TextField
          disabled
          id="outlined-disabled"
          label="Origin"
          defaultValue="Dhaka"
          variant="outlined"
        />
        
      </div>
      <div>
    
      <TextField
          disabled
          id="outlined-disabled"
          label="Destination"
          defaultValue={destination}
          variant="outlined"
        />
        
      </div>
      <div>
        
      <TextField
                    id="date"
                    label="Form"
                    type="date"
                    defaultValue={materialDateInput}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="To"
                    type="date"
                    defaultValue={materialDateInput}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
        
      </div>
      <div>
    
      <Button onClick={() => {submitBooking(destination)}}>Start Booking</Button>
        
      </div>
    </form>

        </div>
    );
};

export default Booking;