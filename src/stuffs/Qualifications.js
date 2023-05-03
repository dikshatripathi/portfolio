import React from 'react';
import './qualifications.css';

const Qualifications = () => {
  return (
    <div className="qualifications-container" id="qualifications">
      <h2 className="qualifications-title">Qualifications</h2>
      <div className="qualification">
        <div className="qualification-title">12th Class</div>
        <div className="qualification-range">
          <div className="qualification-range-bar" style={{ width: '80.8%' }}></div>
          <div className="qualification-range-label">80.8%</div>
        </div>
      </div>
      <div className="qualification">
        <div className="qualification-title">10th Class</div>
        <div className="qualification-range">
          <div className="qualification-range-bar" style={{ width: '77.9%' }}></div>
          <div className="qualification-range-label">77.9%</div>
        </div>
      </div>
      <div className="qualification">
        <div className="qualification-title">B.Tech</div>
        <div className="qualification-range">
          <div className="qualification-range-bar" style={{ width: '80.03%' }}></div>
          <div className="qualification-range-label">80.03%</div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
