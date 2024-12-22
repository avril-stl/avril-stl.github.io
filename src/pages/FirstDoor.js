import React from 'react';

//this has basically nothing in it right now it just renders a silly picture 
const FirstDoor = () => {
    return (
      <div
        style={{
          backgroundImage: `url(/pixelPrincess.png)`,
          backgroundSize: 'cover', // Ensure the image covers the div
          width: '100%', // or specific width
          height: '1000px' // or specific height
        }}
      >
        Hello World
      </div>
    );
};
  
export default FirstDoor;
