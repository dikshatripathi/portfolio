import React from 'react';
import './colorbar.css';
import c1 from './img/c7.jpg';
import c2 from './img/bg.jpg';
import c3 from './img/c6.jpg';
import c4 from './img/c1.jpg';

function ColorBar() {
  const colorbar = (url) => {
    document.body.style.backgroundImage = `url('${url}')`;
    document.body.style.color="black";
  }

  const handleColorClick = (url) => {
    colorbar(url);
  }

  return (
    <div className="dbtn">
      <div className="btn" id="c1" onClick={() => handleColorClick(c1)}></div>
      <div className="btn" id="c2" onClick={() => handleColorClick(c2)}></div>
      <div className="btn" id="c3" onClick={() => handleColorClick(c3)}></div>
      <div className="btn" id="c4" onClick={() => handleColorClick(c4)}></div>
    </div>
  )
}

export default ColorBar;
