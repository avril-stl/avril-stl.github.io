import React, { useState, useEffect, useRef } from 'react';
import './terminalModal.css';

const TerminalModal = ({ isOpen, onClose }) => {
  const [command, setCommand] = useState('');        // Current command the user is typing
  const [output, setOutput] = useState([]);          // Array to store terminal output
  const terminalRef = useRef(null);                  // Reference to terminal output for scrolling

  // Scroll to the bottom whenever new content is added
  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();  // Auto-scroll when output changes
  }, [output]);

  const handleInputChange = (e) => {
    setCommand(e.target.value);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (command.trim()) {
      // Add the user's command to the output
      setOutput((prevOutput) => [
        ...prevOutput,
        { text: `(base) knight_charming@Avrils-Website ~ % ${command}`, isInput: true }, // Command line
        { text: `Simulated output for: ${command}`, isInput: false }, // Simulated output
      ]);
      setCommand(''); // Clear the command input
    }
  };

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="terminal-header">
            <div className="header-text"> 📁 charminguser — - zsh</div>
            <button className="close-button" onClick={onClose}>X</button>
          </div>
          <div className="terminal-body">
            <div className="terminal-output" ref={terminalRef}>
              {/* Displaying terminal output including user input */}
              {output.map((line, index) => (
                <div key={index} className={line.isInput ? 'input-line' : 'output-line'}>
                  {line.text}
                </div>
              ))}

              {/* Command input directly inside the terminal output */}
              <form onSubmit={handleCommandSubmit} className="command-form">
                <div className="command-line">
                  <span className="terminal-prompt">(base) knight_charming@Avrils-Website ~ % </span>
                  <input
                    type="text"
                    value={command}
                    onChange={handleInputChange}
                    autoFocus
                    className="command-input"
                    onFocus={(e) => e.target.select()} // Select input text when focused
                    spellCheck="false"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default TerminalModal;
