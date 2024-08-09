import React from "react";
import "./App.css"; // Import the CSS file

function Links({ github, linkedin }) {
  return (
    <div className="links-container">
      <h3>Links</h3>
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
}

export default Links;

