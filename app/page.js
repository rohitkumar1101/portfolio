// pages/index.js
import React from 'react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';

const Home = () => {
  return (
    <div>
      <Header />
      <h2>Projects</h2>
      <div className='grid grid-cols-3'>
      <ProjectCard
        title="Project 1"
        description="Description of project 1."
        link="https://example.com/project1"
      />
      <ProjectCard
        title="Project 2"
        description="Description of project 2."
        link="https://example.com/project2"
      />
        <ProjectCard
          title="Project 3"
          description="Description of project 3."
          link="https://example.com/project3"
        />
      </div>

    </div>
  );
};

export default Home;
