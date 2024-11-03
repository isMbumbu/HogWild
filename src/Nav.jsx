import React, { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Example of a Nav component
function Nav() {
  return (
    <nav className="navbar">
      <h1>Hog Wild</h1>
      <div className="desktop-nav">
        <button className="nav-button">Home</button>
        <button className="nav-button">All Hogs</button>
        <button className="nav-button">Add New Hog</button>
      </div>
    </nav>
  );
}


  return (
    <nav style={navStyle}>
      <h1>Hog Wild</h1>
      <div style={navLinks}>
        <button style={buttonStyle} onClick={toggleMenu}>
          {menuOpen ? "Close Menu" : "Menu"}
        </button>
        {menuOpen && (
          <div style={menuStyle}>
            <button style={buttonStyle}>Home</button>
            <button style={buttonStyle}>All Hogs</button>
            <button style={buttonStyle}>Add New Hog</button>
          </div>
        )}
      </div>
      {/* Show buttons directly for larger screens */}
      <div className="desktop-nav" style={{ display: window.innerWidth > 768 ? 'flex' : 'none' }}>
        <button style={buttonStyle}>Home</button>
        <button style={buttonStyle}>All Hogs</button>
        <button style={buttonStyle}>Add New Hog</button>
      </div>
    </nav>
  );
}

// Basic inline styles for illustration
const navStyle = {
  padding: "1rem",
  backgroundColor: "#f5a623",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const navLinks = {
  display: "flex",
  gap: "0.5rem",
};

const menuStyle = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "60px", // Adjust based on your nav height
  right: "10px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  zIndex: 1000,
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Nav;
