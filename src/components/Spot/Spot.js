import React from 'react';
import { useParams } from 'react-router-dom';

const Spot = () => {
    const {destination, description} = useParams();
    return (
        <div>
            <h1>Title:{destination}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Spot;