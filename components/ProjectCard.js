// components/ProjectCard.js
import React from 'react';

const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
};

const linkStyle = {
    color: '#0070f3',
    textDecoration: 'none',
    fontWeight: 'bold',
};

const ProjectCard = ({ title, description, link }) => {
    return (
            <div style={cardStyle}>
                <h3>{title}</h3>
                <p>{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                >
                    View Project
                </a>
            </div>
    );
};

export default ProjectCard;
