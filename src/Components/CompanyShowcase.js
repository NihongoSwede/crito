import React from 'react';
import logo3 from '../Assets/companyLogos/logo1.png';
import logo4 from '../Assets/companyLogos/logo2.png';
import logo5 from '../Assets/companyLogos/logo3.png';
import logo1 from '../Assets/companyLogos/logo4.png';
import logo2 from '../Assets/companyLogos/logo5.png';


const list = [logo3, logo4, logo5, logo1, logo2];

const CompanyShowcase = () => {
  const images = list.map((image, index) => (
    <img key={index} src={image} alt="" />
  ));

  return (
    <section className="company-showcase">
      <div className="container">
        <div className="clients">{images}</div>
      </div>
    </section>
  );
};

export default CompanyShowcase;