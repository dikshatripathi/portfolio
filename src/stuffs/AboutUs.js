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
        <p>Description of the person goes here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus et tempore eligendi deleniti itaque sed, eos soluta dolor maxime accusantium. Voluptates magnam provident illum veniam ut nostrum perferendis, ipsum suscipit.
        Laborum nihil nesciunt quae repudiandae reprehenderit porro ut voluptatibus, molestiae perspiciatis pariatur conseiae quae laborum tempore? Consequuntur fuga qui fugit dolore molestiae aperiam cum nesciunt optio.
        Reiciendis dicta inventore sapiente, natus ad sequi saepe voluptatibus, nihil dolor officia voluptatem minus a error reprehenderit totam molestiae nesciunt earum voluptates repellendus provident facere eveniet, aperiam exercitationem perferendis! Est.
        Sit, necessitatibus tempora! Temporibus corporis itaque ut magni exercitationem vitae repudiandae officiis minus repellendus nam officia dolor hic accusantium ab alias, enim veritatis animi, ducimus est vero? Delectus, nam error.</p>
      </div>
    </div>
  );
}

export default AboutUs;
