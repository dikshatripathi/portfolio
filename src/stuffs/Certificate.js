import React from 'react';
import './Certificate.css';
import certificate1 from './img/cer1.png';
import certificate2 from './img/cer2.png';
import certificate3 from './img/cer3.png';
import certificate4 from './img/cer4.png';
import certificate5 from './img/cer5.png';
import certificate6 from './img/cer6.png';
import certificate7 from './img/cer7.png';

const Certificates = () => {
  return (
    <div className="certificates" id="certificates">
      <h2>Certificates</h2>
      <div className="certificates-container">
        <div className="certificate">
          <img src={certificate1} alt="Certificate 1" />
          <div className="certificate-overlay">
            <h3>Java</h3>
          </div>
        </div>
        <div className="certificate">
          <img src={certificate2} alt="Certificate 2" />
          <div className="certificate-overlay">
            <h3>JavaScript</h3>
          </div>
        </div>
        <div className="certificate">
          <img src={certificate7} alt="Certificate 2" />
          <div className="certificate-overlay">
            <h3>Web Development</h3>
          </div>
        </div>
        <div className="certificate">
          <img src={certificate3} alt="Certificate 3" />
          <div className="certificate-overlay">
            <h3>WordPress</h3>
          </div>
        </div>
        <div className="certificate">
          <img src={certificate4} alt="Certificate 3" />
          <div className="certificate-overlay">
            <h3>Python</h3>
          </div>
        </div>
        <div className="certificate">
          <img src={certificate5} alt="Certificate 3" />
          <div className="certificate-overlay">
            <h3>Cpp and C</h3>
          </div>
        </div>
        <div className="certificate">
          <img src={certificate6} alt="Certificate 4" />
          <div className="certificate-overlay">
            <h3>Smart India Hackathon</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
