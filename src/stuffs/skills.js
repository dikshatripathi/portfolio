import React from 'react';
import { Carousel } from 'react-bootstrap';
import './skills.css';
import c1 from './img/cpp.png' 
import c2 from './img/formvalidation.png' 
import c3 from './img/moodify.png'
import c4 from './img/phone.png'
import c5 from './img/portfolioold.png'
import c6 from './img/slide.png'
import c7 from './img/apiquotes.png'
import c8 from './img/stopwatch.png'
import c9 from './img/textwizard.png'




const skills = () => {
    return (
        <div className="skills" id="projects">
            <h2>Projects</h2>
            <Carousel>
                <Carousel.Item>
                    <div className="skill-card">
                    <a href="https://dikshatripathi.github.io/word-counter/" ><img src={c9} alt="Skill 8" /></a>

                        <div className="card-body">
                            <h3>Text Wizard</h3>
                            <p>Description of skill 1 goes here</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="skill-card">
                    <a href="https://dikshatripathi.github.io/Quotes_Play/" ><img src={c7} alt="Skill 8" /></a>

                        <div className="card-body">
                            <h3>API-Quotes</h3>
                            <p>Description of skill 2 goes here</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="skill-card">
                    <a href="https://dikshatripathi.github.io/Cpp_Champion.github.io/" ><img src={c1} alt="Skill 8" /></a>

                        <div className="card-body">
                            <h3>Cpp Champion</h3>
                            <p>Description of skill 3 goes here</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="skill-card">
                    <a href="https://dikshatripathi.github.io/My-Portfolio/" ><img src={c5} alt="Skill 8" /></a>

                        <div className="card-body">
                            <h3>Old Portfolio</h3>
                            <p>Description of skill 4 goes here</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="skill-card">
                    <a href="https://github.com/dikshatripathi/BirthdayGreeting" ><img src={c4} alt="Skill 8" /></a>

                        <div className="card-body">
                            <h3>Greeting App</h3>
                            <p>Description of skill 5 goes here</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="skill-card">
                    <a href="https://dikshatripathi.github.io/Spotify-Clone/" ><img src={c3} alt="Skill 8" /></a>

                        <div className="card-body">
                            <h3>Moodify</h3>
                            <p>Description of skill 6 goes here</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="skill-card">
                    <a href="https://dikshatripathi.github.io/Smart-eProcurement/" ><img src={c2} alt="Skill 8" /></a>

                        <div className="card-body">
                            <h3>Tender Selection</h3>
                            <p>Description of skill 7 goes here</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="skill-card">
                    <a href="https://dikshatripathi.github.io/image-slider/" ><img src={c6} alt="Skill 8" /></a>

                        <div className="card-body">
                            <h3>Image-Slider</h3>
                            <p>Description of skill 8 goes here</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="skill-card">
                       <a href="https://dikshatripathi.github.io/Form-Validation/" ><img src={c2} alt="Skill 8" /></a>
                        <div className="card-body">
                            <h3>Form Validation</h3>
                            <p>Description of skill 8 goes here</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="skill-card">
                       <a href="https://dikshatripathi.github.io/StopWatch/" ><img src={c8} alt="Skill 8" /></a>
                        <div className="card-body">
                            <h3>Stop Watch</h3>
                            <p>Description of skill 8 goes here</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default skills;
