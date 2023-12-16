// components/ContactMe.js
import React from 'react';

const contactMeContainerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const contactFormStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
};

const ContactMe = () => {
  return (
    <div style={contactMeContainerStyle}>
      <h2>Contact Me</h2>
      <div style={contactFormStyle}>
        {/* Add your contact form component or form elements here */}
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default ContactMe;
