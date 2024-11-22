import React from 'react';
//import { useEffect } from 'react';
import './RollingSongBanner.css';
//import gsap from 'gsap';
import ListeningTo from './listeningTo';

const RollingSongBanner = () => {

  // useEffect(() => {
  //   // GSAP animation for infinite scroll
  //   gsap.to('.banner-content', {
  //     x: '-100%',               // Move to the left by the width of the container
  //     duration: 10,              // Speed of the scroll
  //     repeat: -1,                // Infinite loop
  //     ease: 'linear',            // Smooth continuous scroll
  //   });
  // }, []);

  return (
    <div className="banner">
      <div className="banner-content">
        <div className= "center">
          <h1 className="song-banner-text center">Avril Is Currently Listening To: Kissing The Lipless
          </h1>
          
        </div>
      </div>

    </div>
  );
};

export default RollingSongBanner;

