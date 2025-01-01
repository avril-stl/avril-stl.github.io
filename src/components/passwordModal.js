import React, { useState, useEffect } from 'react';
import './passwordModal.css';


const PasswordModal = ({ isOpen, onClose, onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showHint, setShowHint] = useState(false);

  const correctPassword = 'early to the party'; // Set the correct password

  const phrases = ["Aw, Phooey.", "Rats!", "Diggity Darnit!", "Sheesh!", "Womp Womp.", "Youch!"]

  const get_random_phrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }

  const handleHintClick = () => {
    setShowHint(true); // Show the hint when clicked
  };

  // Handle password input change
  const handlePasswordChange = (e) => setPassword(e.target.value.toLowerCase());

  // Handle form submission
  const handleSubmit = () => {
    if (password === correctPassword) {
      onPasswordCorrect(); // Callback to indicate the password is correct
      onClose(); // Close the modal
    } else {
      setError(true); // Show error if password is incorrect
      setErrorMessage(get_random_phrase());
    }
  };

  // Reset error message when the modal is closed
  useEffect(() => {
    if (!isOpen) {
      setError(false);
      setErrorMessage('');
      setPassword(''); // Optionally clear the password input too
      setShowHint(false)
    }
  }, [isOpen]);

  // Handle key down event (check for Enter key)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {  // Check if the Enter key was pressed
      event.preventDefault();  // Prevent form submission or other default behavior
      handleSubmit();  // Call the handleSubmit function when Enter is pressed
    }
  };

  return (
    isOpen && (
      <div className="door-modal-overlay" onClick={onClose}>
        <div className="door-modal-container" onClick={(e) => e.stopPropagation()}>

            {/* Hint Button */}
            {!showHint && (
              <button 
                className="door-hint-button" 
                onClick={handleHintClick} 
                style={{ position: 'absolute', top: '160px', alignItems: 'center', zIndex: 10 }}
              >
                Show Hint
              </button>
            )}

            {/* Hint Display */}
            {showHint && (
              <div className="door-hint-message" style={{ position: 'absolute', top: '110px', right: '-2px' }}>
                <p>Songs make good passwords! Check out some of Avril's favorite tunes via the terminal</p>
              </div>
            )}


          <div className="door-modal-body">
            This Door is Locked.
            <input className='door-modal-input'
              type="text"
              placeholder="Enter Password..."
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}  // Listen for the Enter key
            />
            {error && <div className="door-modal-error">{errorMessage} Try Again.</div>} 
          </div>
        </div>
      </div>
    )
  );
};

export default PasswordModal;
