import './nav.css';
import React from 'react';
import logo from './img/self2.jpg';


function nav(){
    return (
        <nav className=" navbar navbar-expand-lg navbar-dark bg-danger sticky" id="newbar">
        <div className="container-fluid">
            <div class="con">
        <img id="im" src={logo} alt="Logo" />
        </div>
          <a className="navbar-brand" href="#"><b class="nav-head h">Diksha </b><b class="nav-head"><span>Tripathi</span></b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>  
            </ul>
           
          </div>
        </div>
      </nav>
    )
}


export default nav;
