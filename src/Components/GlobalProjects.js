import React from 'react';
import pic1 from '../Assets/GlobalProj/Image (5).png';
import pic2 from '../Assets/GlobalProj/Image (6).png';
import pic3 from '../Assets/GlobalProj/Image (7).png';
import pic4 from '../Assets/GlobalProj/Image (8).png';

const Project = ({ imageSrc, title }) => (
  <a className="box-container" href="#">
    <img src={imageSrc} alt="" />
    <h4>{title}</h4>
    <div className="linkB">
      <span>Read more</span>
      <i className="fa-light fa-arrow-up-right"></i>
    </div>
  </a>
);

const GlobalProjects = () => (
  <section className="global-projects">
    <div className="container">
      <div className="top-global">
        <h3>Project & Case Studies</h3>
        <h4>Let’s Look at Our Global Projects</h4>
      </div>

      <div className="global-projects-box">
        <Project imageSrc={pic1} title="Grow your business" />
        <Project imageSrc={pic2} title="Why your client needs a responsive website" />
        <Project imageSrc={pic3} title="Educate your employees to get better results" />
        <Project imageSrc={pic4} title="Business Insights is an important piece of your business" />
      </div>

      <a className="btn-black-btm" href="#">
        <span>All recent projects</span>
        <i className="fa-solid fa-arrow-up-right"></i>
      </a>
    </div>
  </section>
);

export default GlobalProjects;
