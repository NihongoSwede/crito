import React from 'react';

const featuresData = [
  {
    icon: 'fa-regular fa-light fa-handshake',
    title: 'Business Advice',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'fa-regular fa-lightbulb-on',
    title: 'Start-up Business',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'fa-regular fa-chart-mixed-up-circle-dollar',
    title: 'Financial Advice',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'fa-sharp fa-regular fa-cube',
    title: 'Risk Management',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
];

const Features = () => {
  return (
    <section className="company-features">
      <div className="container">
        <div className="features">
          <p>Features</p>
          <h3>Our accounting is trusted by thousands of companies</h3>
          <a className="btn-yellow" href="#">
            Learn more
            <i className="fa-solid fa-arrow-up-right"></i>
          </a>
        </div>

        <div className="company-features-icons">
          {featuresData.map((feature, index) => (
            <div className="iconStack" key={index}>
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
