import React from 'react';
import stars from '../Assets/Star.svg';
import firstimage from '../Assets/Testimonials/Ellipse 1.png';
import seccondimage from '../Assets/Testimonials/Ellipse 1 (1).png';
import thirdimage from '../Assets/Testimonials/Ellipse 1 (2).png';

const Testimonial = ({ image, name, role, text }) => (
  <div className="testimonials-column">
    <img src={stars} alt="" />
    <p>{text}</p>
    <div className="text-img-stack">
      <img src={image} alt="" />
      <div className="text-stack">
        <h4>{name}</h4>
        <p className="business">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="testimonials">
    <div className="white-box">
      <div className="container">
        <h4 className="topTest">Testimonials</h4>
        <h3>What Our Clients Say</h3>
        <div className="testimonials-stack">
          <Testimonial
            image={firstimage}
            name="Cassandra Warren"
            role="Business Manager, Dorfus"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
          />
          <Testimonial
            image={seccondimage}
            name="Amanda Tulling"
            role="Senior Developer, Square"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
          />
          <Testimonial
            image={thirdimage}
            name="Jack McDouglas"
            role="Key Account Manager, Gobona"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
          />
        </div>
        <div className="bottom-section">
          <a className="all-reviews-btn" href="#">
            <span>All Reviews</span> <i className="fa-solid fa-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
