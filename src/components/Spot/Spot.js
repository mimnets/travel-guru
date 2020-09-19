import React from 'react';
import { useParams } from 'react-router-dom';

const Spot = () => {
    const {destination} = useParams();

    return (
        <div>
            <h1>Title:{destination}</h1>
            
        </div>
    );
};

export default Spot;