import React from 'react';
import './Home.css';

const Home = () => {
  const emailMe = () => {
    const email = 'patrickmc21@gmail.com';
    const mailtoLink = 'mailto:' + email;
    window.location.href = mailtoLink;
  }

  return (
    <section className='about-container'>
      <h3 className="greeting">Hello!</h3>
      <p className='about'>
        As a developer, I am constantly searching out
        better, more efficient ways of solving a problem. I
        am excited by the opportunity to tackle new,
        intellectually demanding problems and implement
        creative solutions to solving those problems. I am
        seeking a role that allows me to be part of a team
        with similar passions, and allows for opportunities
        for growth and collaboration. When I am not developing, 
        I enjoy spending time in the mountains, 
        whether it be on the summit of one of Colorado's high peaks, 
        or riding my bike down a nice stretch of singletrack.
      </p>
      <p className='contact'>
        If you would like to drop me a line, please, contact me&nbsp;
          <a 
          href='mailto:patrickmc21@gmail.com'
          className='email-link'>
          here
        </a>
          .
      </p>
    </section>
  )
};

export default Home;