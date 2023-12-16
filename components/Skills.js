// components/Skills.js
import React from 'react';

const skillsContainerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const skillItemStyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  background: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
};

const Skills = () => {
  return (
    <div style={skillsContainerStyle}>
      <h2>Skills</h2>
      <div style={skillItemStyle}>JavaScript</div>
      <div style={skillItemStyle}>React.js</div>
      <div style={skillItemStyle}>Node.js</div>
      {/* Add more skills as needed */}
    </div>
  );
};

export default Skills;
