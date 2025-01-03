import React from 'react';
import './Bedroom.css';


const Bedroom = () => {


    return (
        <div
        className="Bedroom"
    
        >

        <img
          src="/column.png"
          alt="column"
          style={{
            position: 'absolute',
            top: '0px',          
            left: '420px',         
            width: '120px',        
            height: '450px',
            zIndex: 0
          }}
        />

        <img
          src="/column.png"
          alt="column"
          style={{
            position: 'absolute',
            top: '0px',          
            left: '850px',         
            width: '120px',        
            height: '450px',
            zIndex: 0
          }}
        />
  
        <img
          src="/bed2.png"
          alt="Bed"
          style={{
            position: 'absolute',  // Position relative to the parent div
            top: '200px',          // Y-coordinate
            left: '0px',         // X-coordinate
            width: '520px',        // Set size of the object
            height: '520px',
          }}
        />

        <img
          src="/mirror.png"
          alt="Mirror"
          style={{
            position: 'absolute',
            top: '100px',
            left: '1240px',
            width: '150px',
            height: '300px',
          }}
        />

        
        <img
        src="/rosie.png"
        alt="Rosie_the_Rabbit"
        style={{
            position: 'absolute',
            top: '300px',          
            left: '160px',         
            width: '300px',        
            height: '300px',
            zIndex: 1
        }}
        />
        

        <img
          src="/desk_off_screen.png"
          alt="Desk"
          style={{
            position: 'absolute',
            top: '120px',          
            left: '550px',         
            width: '300px',        
            height: '300px',
            zIndex: 1
          }}
        />

        <img
          src="/wardrobe.png"
          alt="Wardrobe"
          style={{
            position: 'absolute',
            top: '20px',          
            left: '850px',         
            width: '500px',        
            height: '500px',
            zIndex: 1
          }}
        />

        <img
          src="/dress.png"
          alt="dress"
          style={{
            position: 'absolute',
            top: '188px',          
            left: '1060px',         
            width: '160px',        
            height: '260px',
            zIndex: 1
          }}
        />

        
        

      </div>
    );
};

export default Bedroom;
