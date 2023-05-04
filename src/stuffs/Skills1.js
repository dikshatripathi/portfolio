import React from 'react';
import './Skills1.css';
import Skills from './Skills1';

const Skills1 = () => {
  const skills = [
    { name: 'C++', color: '#F34B7D' ,description:"As we know C++ is a popular language for developing high-performance applications, such as operating systems, video games, and database systems.And this is my second language which I learn in my Btech journey.It is one of my favourite language.C++ can be easily integrated with other programming languages, making it a valuable tool for software development."},
    { name: 'JavaScript', color: '#F0DB4F',description:"JavaScript is a popular and versatile programming language that is widely used in web development.Js is very intresting to learn because it gives frequent result of your code and make the website user interactive. Some of the popular frameworks include React, Angular, and Vue.js. Node.js, a popular JavaScript runtime environment, allows developers to use JavaScript on the server-side. " },
    { name: 'HTML', color: '#E44D26',description:"HTML, or Hypertext Markup Language, is the backbone of the internet. It is the standard markup language used to create web pages and is responsible for defining the structure and content of a website. And HTML this is the reason why I started development , It shows every changes that we made on code.HTML can be used to create websites that are both beautiful and functional. " },
    { name: 'CSS', color: '#1572B6' ,description:"CSS, or Cascading Style Sheets, is a critical component of modern web development. It is responsible for the look and feel of a website, defining the visual aspects such as color, layout, typography, and animations.CSS allows developers to separate the content and structure of a website from its presentation, which makes it easier to maintain and modify the website."},
    { name: 'Java', color: '#007396' ,description:"Java is a powerful and popular programming language that has many important uses in today's technology-driven world. This language excites me because it is  Java is highly scalable and can handle large-scale applications with ease. This makes Java an ideal choice for developing enterprise-level applications that need to handle a large volume of data and users.Java is highly scalable and can handle large-scale application."},
    { name: 'MySQL', color: '#00758F' ,description:"MySQL is an open-source relational database management system that has become one of the most widely used database systems in the world.MySQL is used by many of the world's largest websites, including Facebook, YouTube, and Wikipedia. It is also used by many small and medium-sized businesses for managing their data.MySQL supports operating systems, including Windows,Linux,and macOS."},
    { name: 'React', color: '#61DAFB',description:"React is an open-source JavaScript library that is widely used for building user interfaces.React was developed by Facebook in 2011 and was released as an open-source project in 2013. React is known for its high performance and fast rendering capabilities, which make it a popular choice for building complex applications.React uses a virtual DOM  (Document Object Model) which allows it to update only the parts of a page" },
    { name: 'C', color: '#A8B9CC',description:"C is a powerful programming language that has been around for several decades. It was developed in the early 1970s by Dennis Ritchie at Bell Labs and is still widely used today. It is my first language which I learn in first step of my technical field.C is the foundation for many modern programming languages, including C++, Java, Python, and Perl.It is a compiled language making it faster than interpreted languages." },
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
                  {skill.description}
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
