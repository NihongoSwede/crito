import React from 'react';
import line from '../Assets/Line 2.svg';

const Service = ({ title, description }) => (
  <a className="squares-button" href="#">
    <img src={line} alt="" />
    <h4>{title}</h4>
    <p>{description}</p>
    <div className="icon-square">
      <i className="fa-light fa-arrow-right"></i>
    </div>
  </a>
);

const OurServices = () => (
  <section className="companyServices">
    <div className="container">
      <h4 className="content-header">Our Services</h4>
      <h3>We provide the best service for consulting</h3>
      <div className="stacks-showcase">
        {[
          { title: 'Business Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' },
          { title: 'Startup Business', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' },
          { title: 'Financial Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' },
          { title: 'Business Advice', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' },
        ].map(({ title, description }, index) => (
          <Service key={index} title={title} description={description} />
        ))}
      </div>
      <div className="singleButton">
        <a className="btn-transparent-mid" href="#">
          Browse Services <i className="fa-solid fa-arrow-up-right"></i>
        </a>
      </div>
    </div>
  </section>
);

export default OurServices;
