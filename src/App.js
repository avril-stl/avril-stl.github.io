import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RollingSongBanner from './components/RollingSongBanner';
import Navbar from './components/navbar';
import TerminalModal from './components/terminalModal';
// import Geneva from './pages/Geneva';  // Import the About component
import FirstDoor from './pages/FirstDoor';  // Import the About component

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <Router>
      <div className="App">
        
        {/* Define Routes */}
        <Routes>
          {/* Home route (default) */}
          <Route path="/" element={

            <div> 
              <div>
                <RollingSongBanner />
                <Navbar />
                <TerminalModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
         
              <header className="App-header">
                <div className="title-text">
                  <h1>Hello, Hero.</h1>
                </div>
                <div onClick={openModal}>
                  <img src="/door_gem_2.gif" alt="Door" className="center" />
                </div>
                
              </header>
            </div>
            
            
          } />

          {/* FirstDoor route */}
          <Route path="/door_one" element={<FirstDoor />} />
          {/* Geneva route */}
          {/* <Route path="/crimes" element={<Geneva />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
