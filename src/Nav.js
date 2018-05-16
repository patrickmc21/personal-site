import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <NavLink 
          to='/about'
          className='nav-btn'
          activeClassName='active-nav' >
          About
        </NavLink>
        <NavLink 
          to='/projects'
          className='nav-btn'
          activeClassName='active-nav' >
          Projects
        </NavLink>
        <a 
          href='https://github.com/patrickmc21'
          className='nav-btn'
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
        <a 
          href='https://www.linkedin.com/in/patrickmcl/'
          className='nav-btn'
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
        <a 
          href='https://www.turing.io/sites/default/files/resumes/patrick_mclaughlin.pdf'
          className='nav-btn'
          target="_blank"
          rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </nav>
  )
};

export default Nav;