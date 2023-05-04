import React from 'react';
import './qualifications.css';

const Qualifications = () => {
  return (
    <div className="qualifications-container" id="qualifications">
      <h2 className="qualifications-title">Qualifications</h2>
      <div className="qualification">
        <div className="qualification-title">12th className</div>
        <div className="qualification-range">
        <div className="qualification-range-bar" style={{ width: '80.8%' }}></div>
          <div className="qualification-range-label">80.8%</div>
        </div>
        <div><a href="https://drive.google.com/file/d/14PPTADar4sQ5hq28PFK6ijb1g8dR-zwk/view?usp=share_link"><i className="uil uil-file-alt lar"></i></a><span className="te">Pdf</span></div>
       
      </div>
      <div className="qualification">
        <div className="qualification-title">10th className</div>
        <div className="qualification-range">
          <div className="qualification-range-bar" style={{ width: '77.9%' }}></div>
          <div className="qualification-range-label">77.9%</div>
        </div>
        <div><a href="https://drive.google.com/file/d/1534wUKeEUXKwxd1NpN21BjoDtoB-TF5c/view?usp=share_link"><i className="uil uil-file-alt lar"></i></a><span className="te">Pdf</span></div>
      </div>
      <div className="qualification">
        <div className="qualification-title">B.Tech</div>
        <div className="qualification-range">
          <div className="qualification-range-bar" style={{ width: '80.03%' }}></div>
          <div className="qualification-range-label">80.03%</div>
        </div>
      <div><a href="https://drive.google.com/file/d/1dz44F_LR0tnWM8xjvIo692IyOrvHGVIF/view?usp=share_link"><i className="uil uil-file-alt lar"></i></a><span className="te">Pdf</span></div>
      </div>
    </div>
  );
};

export default Qualifications;
