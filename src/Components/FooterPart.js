import React from 'react';
import bottomlogo from '../Assets/Logo (1).svg';

const FooterPart = () => (
  <section className="bottom-section1">
    <div className="container">
      <div className="picture-text-div">
        <img src={bottomlogo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          obcaecati voluptas voluptates! Voluptates laborum nam ratione minus
          necessitatibus, iure praesentium.
        </p>
      </div>

      <div className="rightPartsec">
        {[
          {
            title: 'Company',
            links: ['About', 'Features', 'Work', 'Career'],
          },
          {
            title: 'Help',
            links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy & Policy'],
          },
          {
            title: 'Resources',
            links: ['Free eBooks', 'Development Tutorial', 'How to -Blog', 'Youtube Playlist'],
          },
          {
            title: 'Link',
            links: ['Free eBooks', 'Development Tutorial', 'How to -Blog', 'Youtube Playlist'],
          },
        ].map((section, index) => (
          <div className="divStack" key={index}>
            <h4>{section.title}</h4>
            {section.links.map((link, linkIndex) => (
              <a key={linkIndex} href="">{link}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default FooterPart;