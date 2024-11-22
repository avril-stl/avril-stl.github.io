import React, { useState } from 'react';
import './CollapsiblePanel.css'; // CSS file for styling

const CollapsiblePanel = () => {
  // State to manage whether the side panel is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the side panel
  const togglePanel = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="container">
      {/* Collapsible side panel */}
      <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        <h2>Side Panel</h2>
        <p>This is a collapsible side panel. You can put any content here.</p>
      </div>

      {/* Main content area */}
      <div className="main-content">
        {/* Button to toggle the side panel */}
        <button className="toggle-button" onClick={togglePanel}>
          {isOpen ? '× Close Panel' : '☰ Open Side Panel'}
        </button>
        <h1>Welcome to My Website!</h1>
        <p>This is the main content area of the website.</p>
      </div>
    </div>
  );
};

export default CollapsiblePanel;
