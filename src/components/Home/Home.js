import React from 'react';
import CoxsBazar from '../../images/CoxsBazar.png';
import Sreemongol from '../../images/Sreemongol.png';
import Sundorbon from '../../images/Sundorbon.png';
import TourLocation from '../TourLocation/TourLocation';

const Home = () => {
      const style={
            display: 'flex',
            margin: '20px',
            justifyContent:'flex-end'
      }
      const tLocation = [
          {
              title: "Cox's Bazar",
              description: "This is cox's bazar, it has a very big and beautiful long beach.",
              destination:"CoxsBazar",
              imgUrl: CoxsBazar,
              rating: '4 star',
              price: 54
          },
          {
            title: "Sreemongol",
            description: "This is Sreemongol, it has a very big and beautiful natural and green tea garden.",
            destination:"Sreemongol",
            imgUrl: Sreemongol,
            rating: '4.5 star',
            price: 59
        },
        {
            title: "Sundorbon",
            description: "This is Sundorbon, it has a very big and beautiful mangrove forest.",
            destination:"Sundorbon",
            imgUrl: Sundorbon,
            rating: '4.7 star',
            price: 60
        }
      ]
    return (
        <div style={style}>
            {
                tLocation.map(tl => <TourLocation key={tl.destination} tourSpot={tl}></TourLocation>)
            }
        </div>
    );
};

export default Home;