import React from 'react';
import pixel_princess from './pixel_princess.png';
import './App.css';
import './sidebar.css';
import RollingSongBanner from './components/RollingSongBanner';


const App = () => {

  return (
    <div className="App">
      <RollingSongBanner />

      {/* <div className="sidebar"> 
        
        <div >
          <a 
            href= "https://www.linkedin.com/in/avril-studstill-86558222b/"
            className="my-link"
          >
            ...Never Checks Her LinkedIn
          </a>

        </div>

        <div >
          <a 
            href= "https://open.spotify.com/user/nerdycupquakes?si=cc27074ffe6241a3"
            className="my-link"
          >
            ...Listens To Songs You've Never Heard Of
          </a>

        </div>

      </div> */}
      
      <header className="App-header">
        <div className="title-text">
          <h1>Hello, Hero.</h1>
        </div>
      
        {/* <img src={pixel_princess} className="App-logo" alt="logo" /> */}
      </header>
    </div>

   
  );
};

export default App;




