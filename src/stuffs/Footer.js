import React from 'react';
import { FaHome, FaCode, FaGraduationCap, FaProjectDiagram, FaInfo,FaCertificate } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-social">
              <a href="/#"><FaHome /></a>
              <a href="/#about"><FaInfo /></a>
              <a href="/#skills"><FaCode /></a>
              <a href="/#qualifications"><FaGraduationCap /></a>
              <a href="/#projects"><FaProjectDiagram /></a>
              <a href="/#certificates"><FaCertificate /></a>
            </div>
            <div className="footer-text">
              <p>© 2023 Diksha Tripathi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
