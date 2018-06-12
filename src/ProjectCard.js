import React from 'react';

import './ProjectCard.css';

const ProjectCard = ({title, img, overview, goals, github, live}) => {
  return (
    <article className='project-card'>
      <h2 className='project-title'>
        {title}
      </h2>
      <img className='project-img' src={img} alt='project image' />
      <div className='project-overview-container'>
        <h3 className='project-overview-header'>
            Overview
          </h3>
          <p className='project-overview'>
            {overview}
          </p>
      </div>
      {
        goals &&
        <div className='project-goals-container'>
          <h3 className='project-goals-header'>
            Goals
          </h3>
          <p className='project-goals'>
            {goals}
          </p>
        </div>
      }
      <a 
        href={github} 
        className='project-repo'
        target="_blank"
        rel="noopener noreferrer">
        GitHub
      </a>
      <a 
        href={live} 
        className='project-live'
        target="_blank"
        rel="noopener noreferrer">
        See it Live
      </a>
    </article>
  )
}

export default ProjectCard;