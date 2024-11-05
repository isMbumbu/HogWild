import React, { useState } from 'react';

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui eight wide column ui card">
      <h3>{hog.name}</h3>
      {/* Check if hog.image is a valid File object or a static image path */}
      {hog.image instanceof File ? (
        <img
          src={URL.createObjectURL(hog.image)} // Create a URL for the uploaded image
          alt={hog.name}
          style={{ width: '200px', height: 'auto' }} // Set the width and height
        />
      ) : (
        <img
          src={hog.image} // Use the static image path
          alt={hog.name}
          style={{ width: '200px', height: 'auto' }} // Set the width and height
        />
      )}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal: {hog['highest medal achieved']}</p>
          <button onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the parent div's onClick
            hideHog(hog.name);
          }}>Hide Hog</button>
        </div>
      )}
    </div>
  );
}

export default HogTile;
