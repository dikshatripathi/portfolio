import React from 'react';
import './Skills1.css';
import Skills from './Skills1';

const Skills1 = () => {
  const skills = [
    { name: 'C++', color: '#F34B7D' },
    { name: 'JavaScript', color: '#F0DB4F' },
    { name: 'HTML', color: '#E44D26' },
    { name: 'CSS', color: '#1572B6' },
    { name: 'Java', color: '#007396' },
    { name: 'MySQL', color: '#00758F' },
    { name: 'React', color: '#61DAFB' },
    { name: 'C', color: '#A8B9CC' },
  ];

  return (
    <div className="container" id="skills">
      <h2 className="text-center mb-5">Skills</h2>
      <div className="row">
        {skills.map((skill) => (
          <div key={skill.name} className="col-md-3">
            <div className="card" style={{ backgroundColor: skill.color }}>
              <div className="card-body">
                <h5 className="card-title">{skill.name}</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills1;
