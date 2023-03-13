import React from 'react'
import "./projects.css";

import projectList from '../projectList';

const Projects = () => {

  return (
    <div className='projects' id='projects'>
        <h1 className='projects__title'>I have worked on ...</h1>
        <div className='projects__main'>
            {
                projectList.map((item, index)=>{
                    return (
                      <div className='project' key={index + 1}>
                        <div className='project__hr'></div>
                        <div className="project__text">
                          <h1>{item.text}</h1>
                          <div className='project__subtext'>
                            <p>{item.subtext}</p>
                            <a className='project--glow' target={'_blank'} rel={'noreferrer'} href={item.link}>
                                Veiw Project
                                <span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </a>
                          </div>
                        </div>
                        <div className="project__img">
                          <img src={item.img} alt={"project" + (index + 1)} />
                        </div>
                      </div>
                    );
                })
            }
            <div className='project__hr'></div>
        </div>
    </div>
  )
}

export default Projects