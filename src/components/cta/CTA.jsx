import React from 'react'
import "./cta.css";

const CTA = () => {
  return (
    <div className='cta' id='contact'>
        <div className='cta__apl'>
            <p>Liked my work?</p>
            <h1>Let's Talk</h1>
        </div>
        <div className='cta__connect'>
            <p>Connect with me</p>
            <div className='cta__social'>
                <div className='cta--glow'>
                    <a href='mailto:csg4786@gmail.com'>
                        <i className="fa-solid fa-paper-plane"></i>
                        <span>Email</span>
                    </a>
                </div>
                <div className='cta--glow'>
                    <a href='https://github.com/abhirath400'>
                        <i className="fa-brands fa-github"></i>
                        <span>Github</span>
                    </a>
                </div>
                <div className='cta--glow'>
                    <a href='https://www.instagram.com/joseph_4_cooper'>
                        <i className="fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                    </a>
                </div>
                <div className='cta--glow'>
                    <a href='https://www.linkedin.com/in/chandrashekhar-gouda-41975a229/'>
                        <i className="fa-brands fa-linkedin"></i>
                        <span>Linkedin</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA