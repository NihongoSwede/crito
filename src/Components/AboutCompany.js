import React from 'react';
import stripes from '../Assets/Stripes/EWlement.png';
import woman from '../Assets/Image (4).png';

const AboutCompany = () => (
  <section className="aboutCompany">
    <div className="container">
      <img className="woman" src={woman} alt="" />

      <div className="stripes-woman">
        <img src={stripes} alt="" />
      </div>

      <div className="text-box-blue">
        <h4> Samantha Brown, <span>Founder</span></h4>
        <p>"Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit."</p>
      </div>

      <div className="aboutCompanyContent">
        <h4>About Company</h4>
        <h3>We Are Business Consulting & Credit Repair Access</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
        </p>
        <div className="icon-pack">
          <div className="arrowbox">
            <a className="btn-black" href="#">
              <span>Learn more</span> <i className="fa-light fa-arrow-up-right"></i>
            </a>
          </div>
          <a className="play-button" href="#"><i className="fa-regular fa-circle-play fa-2XL"></i> Play Video</a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutCompany;