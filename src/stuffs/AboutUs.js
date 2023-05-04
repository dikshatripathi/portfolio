import React from 'react';
import './AboutUs.css';
import imageSrc from './img/self1.png';
import imageSrc1 from './img/self2.jpg';


const AboutUs = () => {
  return (
    <div className="about-us" id="about">
      <div className="image-container">
        <img src={imageSrc} alt="Person" />
      </div>
      <div className="description">
        <h2>Diksha Tripathi</h2>
        <div className="some">
                  <p className="para">I am a driven and passionate individual who has a thirst for knowledge and a talent for innovation. My curiosity and eagerness to learn constantly fuel my desire to invent something new and exciting using my existing knowledge.<br/><br/>

          As a responsible and organized candidate, I recognize the value of time and prioritize efficiency in all that I do. My technical skills, which include proficiency in CPP, Java, HTML, CSS, JavaScript, React, and MySQL, have allowed me to excel in web development projects. I take pride in creating visually stunning websites that are both functional and attractive.
          <br/><br/>
          Furthermore, my unwavering commitment to giving my best to my country is a core part of who I am. I am passionate about making a positive impact on society and contributing to something greater than myself. It is this drive that motivates me to continuously strive for excellence and push myself beyond my limits.
          <br/><br/>
          In addition to my professional pursuits, I also have a passion for music. My friends often tell me that I have a beautiful singing voice, and I love to share my gift with others whenever I get the chance. I find singing to be a therapeutic and uplifting experience that helps me to express myself in a unique way.
          <br/><br/>
          Similarly, I also enjoy traveling and exploring new places. There's something truly exhilarating about immersing myself in new cultures and experiencing everything that a new location has to offer. Whether I'm trekking through the mountains, lounging on a beach, or simply wandering through a new city, I always try to approach each adventure with an open mind and a sense of wonder.
          <br/><br/>
          Overall, with my technical skills, creativity, and passion for making a positive impact on the world, I am confident that I will continue to achieve great things and contribute to something greater than myself.<br /><br /></p></div>
           </div>
           </div>

  );
}

export default AboutUs;
