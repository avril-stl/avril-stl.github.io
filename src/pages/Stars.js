import React from 'react';


const Bedroom = () => {
    
    return (
      <div
        // style={{
        //   backgroundImage: `url(/wall+floor.png)`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   height: '500px',
        //   position: 'relative',  // Make the parent div a containing block for absolute positioning
        // }}
      >
  
        <img
          src="/bed2.png"
          alt="Bed"
          style={{
            position: 'absolute',  // Position relative to the parent div
            top: '200px',          // Y-coordinate
            left: '100px',         // X-coordinate
            width: '500px',        // Set size of the object
            height: '500px',
          }}
        />

        <img
          src="/mirror.png"
          alt="Mirror"
          style={{
            position: 'absolute',
            top: '100px',
            left: '1800px',
            width: '300px',
            height: '300px',
          }}
        />

        <img
          src="/rosie.png"
          alt="Rosie_the_Rabbit"
          style={{
            position: 'absolute',
            top: '250px',          
            left: '250px',         
            width: '300px',        
            height: '300px',
            zIndex: 1
          }}
        />
        

      </div>
    );
};

export default Bedroom;