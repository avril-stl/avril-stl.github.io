import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RollingSongBanner from './components/RollingSongBanner';
import TerminalModal from './components/terminalModal'; // Existing terminal modal
import PasswordModal from './components/passwordModal'; // New password modal for door
import FirstDoor from './pages/FirstDoor';  // Import the About component
import Bedroom from './pages/Bedroom';
import PhaserGame from './games/constellation_path'

const App = () => {
  // State for terminal modal
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);

  // State for door modal
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  // Open and close terminal modal
  const openTerminalModal = () => setIsTerminalModalOpen(true);
  const closeTerminalModal = () => setIsTerminalModalOpen(false);

  // Open and close password modal
  const openPasswordModal = () => setIsPasswordModalOpen(true);
  const closePasswordModal = () => setIsPasswordModalOpen(false);

  // Handle correct password input for the door
  const handlePasswordCorrect = () => {
    setIsDoorOpen(true); // Change the door to open
  };

  return (
    <Router>
      <div className="App">
        {/* Define Routes */}
        <Routes>
          {/* Home route (default) */}
          <Route
            path="/"
            element={
              <div>
                <div>
                  <RollingSongBanner />
                  <TerminalModal isOpen={isTerminalModalOpen} onClose={closeTerminalModal} />
                </div>

                <header className="App-header">
                  <div className="title-text">
                    <h1>Hello, Hero.</h1>
                  </div>

                  {/* Terminal Icon (Fixed in place) */}
                  <div onClick={openTerminalModal}>
                    <img
                      src="/terminal_icon.png"
                      alt="terminal_icon"
                      style={{
                        position: 'fixed',
                        bottom: '-3vh',    // 10% of the viewport height
                        left: '1vw', 
                        width: '100px', // Set size of the object
                        height: '100px',
                        zIndex: 3,
                      }}
                    />
                  </div>

                  {/* Door Icon (Fixed in place) */}
                  <div onClick={openPasswordModal}>
                    <img
                      src={isDoorOpen ? window.location.href = "http://localhost:3000/bedroom" : "/door_gem_2.gif"}
                      alt="door"
                      style={{
                        position: 'relative',  // Position relative to the parent div
                        bottom: '0px',  // Y-coordinate for the door icon
                        left: '0px', // X-coordinate for the door icon
                        width: '400px', // Set size of the object
                        height: '400px',
                        zIndex: 2,
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                </header>
              </div>
            }
          />

          {/* Other Routes */}
          <Route path="/door_one" element={<FirstDoor />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/star_song" element={<PhaserGame />} />

        </Routes>

        {/* Terminal Modal (Fake terminal) */}
        <TerminalModal isOpen={isTerminalModalOpen} onClose={closeTerminalModal} />

        {/* Password Modal (Door password entry) */}
        <PasswordModal
          isOpen={isPasswordModalOpen}
          onClose={closePasswordModal}
          onPasswordCorrect={handlePasswordCorrect}
        />
      </div>
    </Router>
  );
};

export default App;
