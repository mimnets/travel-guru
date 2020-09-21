import React from 'react';

import TourLocation from '../TourLocation/TourLocation';

 export const tLocation = [
    {
        title: "Cox's Bazar",
        description: "This is cox's bazar, it has a very big and beautiful long beach.",
        destination:"CoxsBazar",
        imgUrl: 'https://1.bp.blogspot.com/-pL1m3ZRemoE/X2drzEUAdyI/AAAAAAAAoGQ/3h6yh-0hTZMeSbfz-5QwyzkhyKpLlcsOwCLcBGAsYHQ/s320/CoxsBazar.png',
        rating: '4 star',
        price: 54
    },
    {
      title: "Sreemongol",
      description: "This is Sreemongol, it has a very big and beautiful natural and green tea garden.",
      destination:"Sreemongol",
      imgUrl: 'https://1.bp.blogspot.com/-c_jGTT0ahAs/X2drpcdTXyI/AAAAAAAAoGM/2ZqEGuKQk6kmKpz7L4NbVRIE3jqhz-d6QCLcBGAsYHQ/s320/Sreemongol.png',
      rating: '4.5 star',
      price: 59
  },
  {
      title: "Sundorbon",
      description: "This is Sundorbon, it has a very big and beautiful mangrove forest.",
      destination:"Sundorbon",
      imgUrl: 'https://1.bp.blogspot.com/-2q1wOOsl5n8/X2dro6h3N2I/AAAAAAAAoGI/3FXcy0TVv44gVbtkMIICra9VHiO8S9JDwCLcBGAsYHQ/s320/Sundorbon.png',
      rating: '4.7 star',
      price: 60
  }
  ]


const Home = () => {
    
      const style={
            display: 'flex',
            margin: '20px',
            justifyContent:'flex-end'
      }
      
    return (
        <div style={style}>
            {
                tLocation.map(tl => <TourLocation key={tl.destination} tourSpot={tl}></TourLocation>)
            }
        </div>
    );
};

export default Home;