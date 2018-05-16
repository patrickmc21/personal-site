import React from 'react';
import Nav from './Nav';
import './Welcome.css';

const Welcome = () => {
  return (
    <div>
      <div className="image-container">
        <div className="image-overlay">
          <div className="welcome__name-container">
            <h1 className="welcome--name">Patrick McLaughlin</h1>
            <h2 className='welcome--job-title'>Software Developer</h2>
          </div>
        </div>
      </div>
      <div className='welcome--nav'>
        <Nav />
      </div>
    </div>
  )
};

export default Welcome;