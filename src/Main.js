import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import ProjectsContainer from './ProjectsContainer';
import './Main.css';

const Main = () => {
  return (
    <div className="Main">
      <header className="App-header">
        <div className="name-container">
          <h1 className="name">Patrick McLaughlin</h1>
          <h2 className='job-title'>Software Developer</h2>
        </div>
        <div className='nav-container'>
          <Nav />
        </div>
      </header>
      <main>
        <Route exact path='/about' component={Home} />
        <Route exact path='/projects' component={ProjectsContainer} />
      </main>
    </div>
  );
}

export default Main;
