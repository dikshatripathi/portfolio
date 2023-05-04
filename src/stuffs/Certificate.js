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
         <a href="https://drive.google.com/file/d/1uzsXtmqvycPv-6EYixifpPwnHD1-gAKQ/view?usp=sharing"> <img src={certificate1} alt="Certificate 1" /></a>
          <div className="certificate-overlay">
            <h3>Java</h3>
          </div>
        </div>
        <div className="certificate">
        <a href="https://drive.google.com/file/d/1iZPgHA1F5wxhvQYkjiXW84vYVEOj57Dp/view?usp=share_link"> <img src={certificate2} alt="Certificate 2" /></a>
          <div className="certificate-overlay">
            <h3>JavaScript</h3>
          </div>
        </div>
        <div className="certificate">
        <a href="https://drive.google.com/file/d/1OH7C-_WM1abQWS0rVO8o4__xzcKaG_wg/view?usp=share_link">  <img src={certificate7} alt="Certificate 2" /></a>
          <div className="certificate-overlay">
            <h3>Web Development</h3>
          </div>
        </div>
        <div className="certificate">
        <a href="https://coursera.org/share/d8d17ff7a7702906629e8dfc4e2b073f">  <img src={certificate3} alt="Certificate 3" /></a>
          <div className="certificate-overlay">
            <h3>WordPress</h3>
          </div>
        </div>
        <div className="certificate">
        <a href="https://coursera.org/share/16e70d3524d9ad0529ba52b4b8725853">  <img src={certificate4} alt="Certificate 3" /></a>
          <div className="certificate-overlay">
            <h3>Python</h3>
          </div>
        </div>
        <div className="certificate">
        <a href="https://drive.google.com/file/d/1zVX3ebBpY64LsC7Ut7kss4zfeKHVhvLb/view?usp=sharing">  <img src={certificate5} alt="Certificate 3" /></a>
          <div className="certificate-overlay">
            <h3>Cpp and C</h3>
          </div>
        </div>
        <div className="certificate">
        <a href="https://drive.google.com/file/d/1CcKlh5VpuHXU3IWvRXHqU7ouW9ATsfjq/view?usp=sharing">  <img src={certificate6} alt="Certificate 4" /></a>
          <div className="certificate-overlay">
            <h3>Smart India Hackathon</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
