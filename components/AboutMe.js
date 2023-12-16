// components/AboutMe.js
import React from 'react';

const aboutMeContainerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const aboutContentStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: '1.6',
};

const AboutMe = () => {
  return (
    <div style={aboutMeContainerStyle}>
      <h2>About Me</h2>
      <div style={aboutContentStyle}>
        <p>
          Welcome to my portfolio! I am a passionate web developer with a focus
          on creating user-friendly and efficient applications.
        </p>
        <p>
          I have a strong foundation in front-end and back-end technologies,
          and I'm always eager to learn new things.
        </p>
        {/* Add more content about yourself */}
      </div>
    </div>
  );
};

export default AboutMe;
