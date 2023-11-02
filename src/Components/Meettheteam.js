import React from 'react';
import pic1 from '../Assets/MeettheTeamPic/Image (9).png';
import pic2 from '../Assets/MeettheTeamPic/Image (10).png';
import pic3 from '../Assets/MeettheTeamPic/Image (11).png';
import pic4 from '../Assets/MeettheTeamPic/Image (12).png';
import dots from '../Assets/DotsIMG/dot(2).svg';

const TeamMember = ({ image, name, position }) => (
  <div className="employee-box">
    <img className="IMGSHOW" src={image} alt="" />
    <h3>{name}</h3>
    <p>{position}</p>
  </div>
);

const Meettheteam = () => (
  <section className="meet-the-team">
    <div className="container">
      <h4>Meet our team</h4>
      <div className="top-header-button">
        <h3>Experience Team Members</h3>
        <a className="btn-black-meet-team" href="#">
          <span>Browse Team</span> <i className="fa-solid fa-arrow-up-right"></i>
        </a>
      </div>

      <div className="team-showcase">
        {[
          { image: pic1, name: 'Kristine Palmer', position: 'Chef operation officer' },
          { image: pic2, name: 'Mark Aubri', position: 'Senior Consultant' },
          { image: pic3, name: 'Kimberly Hansen', position: 'Senior Consultant' },
          { image: pic4, name: 'Justin Willoman', position: 'Senior Tech Consultant' },
        ].map((member, index) => (
          <TeamMember key={index} image={member.image} name={member.name} position={member.position} />
        ))}
      </div>
      <div className="imgpart">
        <img src={dots} alt="" />
      </div>
    </div>
  </section>
);

export default Meettheteam;
