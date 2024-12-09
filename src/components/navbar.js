import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  // State to control sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Open sidebar
  const openNav = () => {
    setIsOpen(true);
  };

  // Close sidebar
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Hamburger icon to open the sidebar */}
      <button className="nav-btn" onClick={openNav}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeNav}>x</button>
        <h1 className="nav-text-title" >
          (base) avrilstudstill@Avrils-Website ~ %
        </h1>
        <a className="nav-text" >
          ...Makes Stuff
        </a>
        <a href="https://open.spotify.com/track/1fkJeS8eigd7lwml2aqIGG?si=b43d36b78cfc49aa" className="nav-link">
          ...Listens to Songs You've Never Heard Of
        </a>
        <a className="nav-text">
          ...Can reccommend you a good book to read 
        </a>
        <a href="www.linkedin.com/in/avril-studstill-86558222b" className="nav-link">
          ...Never Checks her LinkedIn 
        </a>
        <a href="https://www.google.com/search?q=how+to+violate+the+geneva+convention+&sca_esv=360d606574466e04&ei=xgtTZ7_JEcWq5NoP5rKXiQY&ved=0ahUKEwi_xKnzrpOKAxVFFVkFHWbZJWEQ4dUDCA8&uact=5&oq=how+to+violate+the+geneva+convention+&gs_lp=Egxnd3Mtd2l6LXNlcnAiJWhvdyB0byB2aW9sYXRlIHRoZSBnZW5ldmEgY29udmVudGlvbiAyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkitB1AAWABwAHgBkAEAmAFXoAFXqgEBMbgBA8gBAPgBAZgCAaACXZgDAJIHATGgB9YH&sclient=gws-wiz-serp" className="nav-link">
          ...Has Never Violated the Geneva Convention :D
        </a>
      </div>
    </div>
  );
}

export default Navbar;


