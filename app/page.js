// pages/index.js
import React from 'react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';
import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';

const Home = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />

      <h2 className='text-center'>Projects</h2>
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
        <ProjectCard
          title="Project 4"
          description="Description of project 4."
          link="https://example.com/project4"
        />
      </div>

      <ContactMe />
    </div>
  );
};

export default Home;
