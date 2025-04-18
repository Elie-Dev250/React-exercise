import React, { useState } from 'react';
import WebPage from './Webpage';
import sasa from '../assets/sasa.jpg';
import './portfolio.css'; 

function Portfolio() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <WebPage>
      <div className="container">
        <button onClick={handleToggle} className="newbut">
          {isVisible ? 'Hide Profile' : 'Show Profile'}
        </button>

        <div className={`profile-card ${isVisible ? 'visible' : 'hidden'}`}>
          <img src={sasa} alt="Profile" className="profile-img" />
          <h1>Elie-Dev</h1>
          <p className="description">
            Hello guys! I m Elie, a creative full-stack developer who loves building 
            interactive and beautiful web experiences.
          </p>

          
          <p>Am diving into my program after some event</p>
          <button>Hire me</button>


          
        </div>
       
      </div>
    </WebPage>
  );
}

export default Portfolio;
