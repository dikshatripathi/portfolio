import React, { useState, useEffect } from 'react';
import './App.css'
import Navbar from './stuffs/nav';
import Logo from './stuffs/logo';
import Color from './stuffs/colorbar'
import pdf from './stuffs/pdf/Diksha.pdf'
import AboutUs from './stuffs/AboutUs';
import Project from './stuffs/skills';
import Skills from './stuffs/Skills1';
import Qualifications from './stuffs/Qualifications';
import Footer from './stuffs/Footer';
import Certificate from './stuffs/Certificate';
import Hobbies from './stuffs/Hobbies';


function App() {

  return (
    <div>

      <Navbar />
      <Color />
      <div className="m">
        <div className="intro">
          <Logo />
          Hi, I'm <span className="name">DIKSHA TRIPATHI </span>
          <br />
          <span className="name">Software</span>Engineer
          <br />
          <br />
         
        </div>
        <div className="some">
        <p className="para">I am a highly skilled computer science student with a passion for web development. My education and technical expertise make me an ideal candidate for a dynamic and innovative organization. I have experience in various programming languages, front-end and back-end web development, and databases. In addition, I have completed several projects, including a comprehensive C++ resource website and a small-scale Spotify clone, demonstrating my technical proficiency and creativity. I am a quick learner and always eager to take on new challenges to further develop my skills.</p></div>
        <div className="b"><a href={pdf} >Resume</a></div>

        <br/>
        <AboutUs/>
        <Skills/>
        <Qualifications/>
        <Project/>
     <Certificate/>
     <Hobbies/>
      </div>
     
      <Footer/>
      
       </div>

  )

}

export default App;