import React, { useState } from 'react';
import pixel_princess from './pixel_princess.png';
import './App.css';
import RollingSongBanner from './components/RollingSongBanner';
import Navbar from './components/navbar';
import TerminalModal from './components/terminalModal'; // import TerminalModal

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <RollingSongBanner />
      <Navbar />
      <header className="App-header">
        <div className="title-text">
          <h1>Hello, Hero.</h1>
        </div>
        <div className="subtitle-text" onClick={openModal}>
          <h1>[ Click ⭐ to Start ]</h1>
        </div>
      </header>
      <TerminalModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
