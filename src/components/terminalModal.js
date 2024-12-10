import React, { useState, useEffect, useRef } from 'react';
import './terminalModal.css';
import { conversationFlow } from './conversationFlow';  // Import the conversation flow

const TerminalModal = ({ isOpen, onClose }) => {
  const [command, setCommand] = useState('');        // Current command the user is typing
  const [output, setOutput] = useState([]);          // Array to store terminal output
  const [stage, setStage] = useState(0);             // Track the current stage of the conversation
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

    const currentStage = conversationFlow[stage];

    if (command.trim().toLowerCase() === 'clr') {
      setOutput([{text: '', isInput: false }]);  // Reset terminal output

      setStage(0);
    }else if (command.trim().toLowerCase() in currentStage.options) {
      const { responses, nextStage } = currentStage.options[command.trim().toLowerCase()];

      setOutput((prevOutput) => [
        ...prevOutput,
        { text: `(base) charming_knight@Avrils-Website ~ % ${command}`, isInput: true },
        ...responses.map((response) => ({ text: response, isInput: false })),
      ]);
      
      setStage(nextStage);  // Move to the next stage
    } else {
      setOutput((prevOutput) => [
        ...prevOutput,
        { text: `(base) charming_knight@Avrils-Website ~ % ${command}`, isInput: true },
        { text: "Command not recognized. Type 'help' for a list of commands.", isInput: false },
      ]);
    }

    setCommand('');  // Clear the command input
  };

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="terminal-header">
            <div className="header-text"> 📁 faketerminal — - zsh</div>
            <button className="close-button" onClick={onClose}>X</button>
          </div>
          <div className="terminal-body">
            <div className="terminal-output" ref={terminalRef}>
              {output.map((line, index) => (
                <div key={index} className={line.isInput ? 'input-line' : 'output-line'}>
                  {line.text}
                </div>
              ))}

              <form onSubmit={handleCommandSubmit} className="command-form">
                <div className="command-line">
                  <span className="terminal-prompt">(base) charming_knight@Avrils-Website ~ % </span>
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
