import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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

    
    if (id === 'firstName') {
      setFirstName(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'message') {
      setMessage(value);
    }
  };

  const handleForm = async (event) => {
    event.preventDefault();

    const errors = {};

    if (!validate(firstName, 'text', 'firstName')) {
      errors['firstName'] = errorMessages['firstName_invalid'];
    }

    if (!validate(email, 'email', 'email')) {
      errors['email'] = errorMessages['email_invalid'];
    }

    if (!validate(message, 'message', 'message')) {
      errors['message'] = errorMessages['message_invalid'];
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const user = {
        name: firstName,
        email: email,
        message: message,
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

        if (res.status === 200) {
          setStatusMessage({
            type: 'success',
            message: 'Formuläret har skickats',
          });

          
          setFirstName('');
          setEmail('');
          setMessage('');
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

  useEffect(() => {
    if (statusMessage && statusMessage.type === 'success') {
      const timeout = setTimeout(() => {
        setStatusMessage(null);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [statusMessage]);

  return (
    <section className="contact-form">
      <div className="container">
        <h3>Leave us a message for any Information</h3>

        <form className="formPart" id="registerForm" method="post" onSubmit={handleForm} noValidate>
          
          <input
            id="firstName"
            name="firstName"
            required
            title="Förnamn"
            placeholder="name*"
            tabIndex="1"
            value={firstName}
            onChange={handleInputChange}
            onBlur={handleInputChange}
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
            value={email}
            onChange={handleInputChange}
            onBlur={handleInputChange}
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
            value={message}
            onChange={handleInputChange}
            onBlur={handleInputChange}
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