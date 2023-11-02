import React from 'react';
import img from '../Assets/Image.png';

const ShowCase = () => (
  <section className="showcase">
    <div className="position-holder"></div>
    <div className="container">
      <div className="content">
        <h1>We provide the best business solutions</h1>
        <p>Establish your vision and value proposition and turn them into testable prototypes</p>
        <a className="btn-yellow" href="#">
          Get consulting <i className="fa-solid fa-arrow-up-right"></i>
        </a>
        <a className="btn-transparent" href="#">
          Learn more <i className="fa-solid fa-arrow-up-right"></i>
        </a>
      </div>
      <img src={img} alt="man holding an iPad" />
    </div>
  </section>
);

export default ShowCase;
