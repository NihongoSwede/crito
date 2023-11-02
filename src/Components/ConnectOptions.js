import React from 'react';

const ConnectOption = ({ icon, title, details }) => {
  return (
    <a className="connect-itemstack" href="">
      <div className="circle-black">
        <i className={icon}></i>
      </div>
      <div className="stack-text">
        <h3>{title}</h3>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </a>
  );
};

const ConnectOptions = () => {
  return (
    <section className="connect-options">
      <div className="container">
        <div className="connect-box">
          <ConnectOption
            icon="fa-solid fa-location-dot"
            title="Visit us"
            details={["Sveavägen 31", "111 34 STOCKHOLM"]}
          />

          <ConnectOption
            icon="fa-solid fa-phone"
            title="Call us"
            details={["+46 (8) 121 470 50", "+46 (8) 121 470 51"]}
          />

          <ConnectOption
            icon="fa-solid fa-envelope"
            title="Email us"
            details={["info@crito.com", "support@crito.com"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectOptions;
