import React from 'react';
import './Face.css';
const face = ({ size, face }) => {
  const fontSize = {
    fontSize: `${size}px`,
  };

  return (
    <div className="face">
      <h3 className="face-h3">Face</h3>
      <p className="faceParagraph" style={fontSize}>
        {face}
      </p>
    </div>
  );
};

export default face;
