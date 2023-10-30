import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formErrors, setFormErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);

  const errorMessages = {
    firstName_required: 'Du måste ange ett förnamn',
    firstName_invalid: 'Du måste ange ett giltigt förnamn',
    email_required: 'Du måste ange en emailadress',
    email_invalid: 'Du måste ange en giltig emailadress',
    message_required: 'Du måste ange ett meddelande',
    message_invalid: 'Du har inte angett ett meddelande',
  };

  const validate = (value, elementType, id) => {
    if (!validateLength(value, 1)) {
      return false;
    }

    switch (elementType) {
      case 'text':
        return validateLength(value);
      case 'email':
        return validateEmail(value);
      case 'message':
        return validateLength(value, 3);
      default:
        return true;
    }
  };

  const validateLength = (value, minLength = 2) => {
    return value.length >= minLength;
  };
  
  const validateEmail = (value) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(value);
  };

  const handleInputChange = (event) => {
    const { id, value, type } = event.target;
    setFormErrors({ ...formErrors, [id]: '' });
  
    if (event.type === 'blur' || event.key === 'Enter') {
      if (id === 'message' && !validateLength(value, 2)) {
        setFormErrors({ ...formErrors, [id]: errorMessages[`${id}_invalid`] });
      } else if (!validate(value, type, id)) {
        setFormErrors({ ...formErrors, [id]: errorMessages[`${id}_invalid`] });
      }
    }
  };
  
  const handleForm = async (event) => {
    event.preventDefault();

    const elements = event.target.elements;
    let errors = {};

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.tagName === 'INPUT' && element.required) {
        const { id, value, type } = element;
        if (!validate(value, type, id)) {
          errors[id] = errorMessages[`${id}_invalid`];
        }
      }
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const user = {
        name: event.target['firstName'].value,
        email: event.target['email'].value,
        message: event.target['message'].value,
      };

      const json = JSON.stringify(user);

      try {
        const res = await fetch("https://win23-assignment.azurewebsites.net/api/contactform", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: json,
        });

        if (res.status === 201) {
          const data = await res.json();
          setStatusMessage({
            type: 'success',
            message: 'Du har lyckats registrera en user!',
          });
          

        } else {
          const data = await res.text();
          setStatusMessage({
            type: 'error',
            message: data,
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <section className="contact-form">
      <div className="container">
        <h3>Leave us a message <br /> for any Information</h3>

        <form className="formPart" id="registerForm" method="post" onSubmit={handleForm} noValidate>
          <input
            id="firstName"
            name="firstName"
            required
            title="Förnamn"
            placeholder="name*"
            tabIndex="1"
            onChange={handleInputChange}
            onBlur={handleInputChange}
            onKeyUp={handleInputChange}
          />
          <span id="firstName-error">{formErrors['firstName']}</span>

          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="email*"
            pattern=".+@globex\.com"
            tabIndex="2"
            onChange={handleInputChange}
            onBlur={handleInputChange}
            onKeyUp={handleInputChange}
          />
          <span id="email-error">{formErrors['email']}</span>

          <textarea
            id="message"
            type="text"
            className="messageform"
            name="message"
            tabIndex="3"
            required
            placeholder="message*"
            onChange={handleInputChange}
            onBlur={handleInputChange}
            onKeyUp={handleInputChange}
          ></textarea>
          <span id="message-error">{formErrors['message']}</span>

          <button className="btn-send-pg-2" type="submit" form="registerForm" value="Submit">
            Send message<i className="fa-solid fa-arrow-up-right"></i>
          </button>
        </form>
        {statusMessage && (
          <div className={`alert alert-${statusMessage.type}`} role="alert">
            {statusMessage.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;