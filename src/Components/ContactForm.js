import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <h3>Leave us a message <br/> for any Information</h3>

        <form className="formpPart" id="registerForm" method="post">
          <input id="firstName" name="firstName" title="Förnamn" placeholder="name*" tabIndex="1" />
          <input type="email" id="email" placeholder="email*" pattern=".+@globex\.com" required tabIndex="2" />
          <textarea id="message" className="messageform" placeholder="message*"></textarea>
          <button className="btn-send-pg-2" type="submit" form="form1" value="Submit">
            Send message<i className="fa-solid fa-arrow-up-right"></i>
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;