import React from 'react';

const face = props => {
  return (
    <div className="face">
      <h3>Face</h3>
      <p style={props.size}>{props.face}</p>
    </div>
  );
};

export default face;
