import React, { useState, useEffect, useRef } from 'react';
import './terminalModal.css';
import { conversationFlow } from './conversationFlow';  // Import the conversation flow

const TerminalModal = ({ isOpen, onClose }) => {
  const [command, setCommand] = useState('');        // Current command the user is typing
  const [output, setOutput] = useState([]);          // Array to store terminal output
  const [stage, setStage] = useState(0);             // Track the current stage of the conversation
  const [door, setDoor] = useState(0);               // Track if the door is open and deploy it if so
  const [commandHistory, setCommandHistory] = useState([]);  // Store the command history
  const [historyIndex, setHistoryIndex] = useState(-1);      // Index for cycling through history
  const terminalRef = useRef(null);                  // Reference to terminal output for scrolling
  const inputRef = useRef(null);                     // Reference to input field for managing cursor position

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

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      // Show previous command when up arrow is pressed
      if (historyIndex > 0) {
        setHistoryIndex((prevIndex) => prevIndex - 1);
        setCommand(commandHistory[historyIndex - 1]);
      }
    } else if (e.key === 'ArrowDown') {
      // Show next command when down arrow is pressed
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex((prevIndex) => prevIndex + 1);
        setCommand(commandHistory[historyIndex + 1]);
      } else if (historyIndex === commandHistory.length - 1) {
        // Reset input field if at the end of history
        setHistoryIndex(commandHistory.length);
        setCommand('');
      }
    }
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();

    const currentStage = conversationFlow[stage];
    const doorState = conversationFlow[door];

    // Update history only if the command is non-empty
    if (command.trim()) {
      setCommandHistory((prevHistory) => {
        // Append the command to the history and ensure the index stays at the end
        const newHistory = [...prevHistory, command.trim()];
        setHistoryIndex(newHistory.length);  // Always set to the end of history after submitting
        return newHistory;
      });
    }

    const trimmedCommand = command.trim().toLowerCase()

    // Handle known commands
    if (trimmedCommand  === 'clr') {
      setOutput([{ text: '', isInput: false }]);  // Reset terminal output
      setStage(0);
      setDoor('CLOSED');
    } else if (trimmedCommand in currentStage.options) {
      const { responses, nextStage } = currentStage.options[command.trim().toLowerCase()];
      setOutput((prevOutput) => [
        ...prevOutput,
        { text: `(base) charming_knight@Avrils-Website ~ % ${command}`, isInput: true },
        ...responses.map((response) => ({ text: response, isInput: false })),
      ]);
      setStage(nextStage);  // Move to the next stage
    } else if (trimmedCommand.startsWith('echo')) {
      const tc = command.trim()
      let newcom = tc.replace(/^echo\s*/, '')

      if (newcom.endsWith('|base64') || newcom.endsWith('| base64')){
        newcom = newcom.replace(/\| ?base64$/, '')
        setOutput((prevOutput) => [
          ...prevOutput,
          { text: `(base) charming_knight@Avrils-Website ~ % ${command}`, isInput: true },
          { text: `${btoa(newcom)}`, isInput: false },
        ]); 
      }else if (newcom.endsWith('| base64 -d') || newcom.endsWith('|base64 -d')){
        newcom = newcom.replace(/\| ?base64 -d$/, '')
        try{
          setOutput((prevOutput) => [
            ...prevOutput,
            { text: `(base) charming_knight@Avrils-Website ~ % ${command}`, isInput: true },
            { text: `${atob((newcom))}`, isInput: false },
          ]); 
        }catch (e) {
          setOutput((prevOutput) => [
            ...prevOutput,
            { text: `(base) charming_knight@Avrils-Website ~ % ${command}`, isInput: true },
            { text: `this text is already decoded: ${(newcom)}`, isInput: false },
          ]); 
        }
      }else{
        setOutput((prevOutput) => [
          ...prevOutput,
          { text: `(base) charming_knight@Avrils-Website ~ % ${command}`, isInput: true },
          { text: `${newcom}`, isInput: false },
        ]);
      }
    } else {
      setOutput((prevOutput) => [
        ...prevOutput,
        { text: `(base) charming_knight@Avrils-Website ~ % ${command}`, isInput: true },
        { text: "Command not recognized. Type 'help' for a list of commands.", isInput: false },
      ]);
    }

    setCommand('');  // Clear the command input after submission
  };

  // Ensure the cursor stays at the end of the input field after updating command
  useEffect(() => {
    if (inputRef.current) {
      // Set cursor to the end after the command changes
      setTimeout(() => {
        inputRef.current.focus();
        const length = command.length;
        inputRef.current.setSelectionRange(length, length); // Set cursor at the end
      }, 0);  // Delay to ensure DOM updates first
    }
  }, [command]);  // Trigger this whenever the command changes

  // Focus the input and set cursor at the end on first render (or whenever the modal is opened)
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(command.length, command.length);
      
      // Simulate typing the 'help' command when the modal opens
      if (output.length === 0) { // Only run if output is empty
        setOutput([{ text: "Welcome to the terminal! Type 'help' for a list of commands.", isInput: false }]);
      }
    }
  }, [isOpen, output]); // Only run when modal opens or output is updated

  // Manually set the cursor position to the end after up/down arrow key presses
  useEffect(() => {
    if (inputRef.current) {
      const length = command.length;
      inputRef.current.setSelectionRange(length, length); // Move cursor to the end
    }
  }, [historyIndex]); // Trigger when history index changes

  return (
    isOpen && (
      <div className="modal-overlay" >
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="terminal-header">
            <div className="header-text"> schmerminal — - zsh</div>
            <button className="close-button" onClick={onClose}>x</button>
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
                    ref={inputRef}  // Reference for setting cursor position
                    type="text"
                    value={command}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}  // Handle keydown for arrow keys
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
