import React from 'react'
import './intro.css'

import hiRobot from '../../assets/hi_robot2.gif'

const Intro = () => {
  return (
    <div className="intro" id="home">
      <div className="intro__main">
        <div className="intro__main--img">
          <div className="intro__img-bg">
            <img src={hiRobot} alt="hi_robot" />
          </div>
        </div>
        <div className="intro__main--text">
            <span>Hello!</span>
            <p>I am Chandrashekhar, a web developer, a tech-enthusiast, and an avid learner.</p>
        </div>
      </div>
    </div>
  );
}

export default Intro