import './nav.css';
import React from 'react';
import logo from './img/self2.jpg';


function nav(){
    return (
        <nav className=" navbar navbar-expand-lg navbar-dark bg-danger sticky" id="newbar">
        <div className="container-fluid">
            <div className="con">
       <a href="#about"><img id="im" src={logo} alt="Logo" /></a> 
        </div>
          <a className="navbar-brand" href="#"><b className="nav-head h">Diksha </b><b className="nav-head"><span id="g">Tripathi</span></b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active sel hover-effect" aria-current="page" href="#">Home</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link active sel hover-effect" aria-current="page" href="#about">AboutMe</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link active sel hover-effect" aria-current="page" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active sel hover-effect" aria-current="page" href="#qualifications">Qualifications</a>
              </li>    
              <li className="nav-item">
                <a className="nav-link active sel hover-effect" aria-current="page" href="#projects">Projects</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link active sel hover-effect" aria-current="page" href="#certificates">Certificates</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link active sel hover-effect" aria-current="page" href="#hobbies">Hobbies</a>
              </li>  
            </ul>
           
          </div>
        </div>
      </nav>
    )
}


export default nav;
