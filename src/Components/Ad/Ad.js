import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import './Ad.css';
const adds = ({ lastAddsNumber, onAddsCreate }) => {
  const randNumber = Math.floor(Math.random() * 10);
  //with ternary operator inside useRef, we make sure that a picture is not displayed in the screen 2 times in a row
  const n = useRef(lastAddsNumber === randNumber ? randNumber + 1 : randNumber);

  onAddsCreate(n.current);

  return (
    <div className="ad-div">
      <img className="ad" src={'http://localhost:3000/ads/?r=' + n.current} />
    </div>
  );
};

//we add second func. argument to React.memo, to tell React not to re-render if lastAddsNumber changes,
//we need lastAddsNumber-prop for comparison only, that's why we dont want to re-render if this value changes
const comparisonFn = function(prevProps, nextProps) {
  return true;
};

export default React.memo(adds, comparisonFn);
