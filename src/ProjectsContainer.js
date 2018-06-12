import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projects.json';
import './ProjectsContainer.css';

const ProjectsContainer = () => {

  const ProjectCards = projects.map(project => {
    return (
      <ProjectCard 
        key={project.title}
        {...project}/>
    )
  })

  return (
    <section className='projects-container'>
      {ProjectCards}
    </section>
  )
};

export default ProjectsContainer;