import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import {tLocation} from '../../components/Home/Home';

const Spot = () => {

    const {destination} = useParams();
    const {imgUrl,description} = tLocation.find(element => element.destination.toString() === destination.toString());
    const history = useHistory();
    const handleBooking = (destination) =>{
        history.push(`/booking/${destination}`)
    }
    return (
        <div style={{backgroundImage:`url(${imgUrl})`,backgroundSize: 'cover',
         height:'500px'}}> 
            <h1>Title:{destination}</h1>
            <p>{description}</p>
            <button onClick={() => {handleBooking(destination)}}>Booking</button>
        </div>
    );
};

export default Spot;