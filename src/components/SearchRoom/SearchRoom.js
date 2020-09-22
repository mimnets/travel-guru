import React from 'react';

import { tLocation } from '../Home/Home';



const SearchRoom = () => {
    
    return (
        <div>
            {
          tLocation.map(element =>  <SearchRoom rooms={element}></SearchRoom>)
            }
        </div>
        
    );
};

export default SearchRoom;