import React from 'react';
import './hobbies.css';
import Travel from './img/travel.jpg';
import Sing from './img/sing.jpg';

const Hobbies = () => {
  return (
    <div className="hobbies-container" id="hobbies">
     
     
      <div className="hobby">
        <img src={Travel} alt="Hobby 2" />
        <div className="hobby-info">
          <h3>Traveling</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus diam nec ex luctus, ut iaculis odio bibendum.</p>
        </div>
      </div>
     
      <div className="hobby">
        <img src={Sing} alt="Hobby 4" />
        <div className="hobby-info">
          <h3>Singing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus diam nec ex luctus, ut iaculis odio bibendum.</p>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
