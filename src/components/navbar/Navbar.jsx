import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {NavHashLink} from 'react-router-hash-link'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './navbar.css'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const Menu = ()=>{
        return (
          <>
            <p>
              <NavHashLink className="navbar--glow" to="/">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </NavHashLink>
            </p>
            <p>
              <NavLink className="navbar--glow" to="/about">
                <i className="fa-solid fa-circle-info"></i>
                <span>About</span>
              </NavLink>
            </p>
            <p>
              <NavHashLink className="navbar--glow" to="/#projects">
                <i className="fa-solid fa-diagram-project"></i>
                <span>Projects</span>
              </NavHashLink>
            </p>
            <p>
              <NavHashLink className="navbar--glow" to="/#contact">
                <i className="fa-solid fa-address-card"></i>
                <span>Contact</span>
              </NavHashLink>
            </p>
          </>
          // <>
          //     <p><a className='navbar--glow' href='#home'>Home</a></p>
          //     <p><a className='navbar--glow' href='#projects'>Projects</a></p>
          //     <p><a className='navbar--glow' href='#about'>About</a></p>
          //     <p><a className='navbar--glow' href='#contact'>Contact</a></p>
          // </>
        );
    }

  return (
    <div className='navbar'>
        <div className='navbar__logo navbar--glow'>
            <span>🌙</span> Chandrashekhar Gouda
        </div>
        <div className='navbar__menu'>
            {
                toggleMenu ? (
                    <RiCloseLine
                        color="white"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
            ) : (
                <RiMenu3Line
                color="white"
                size={27}
                onClick={() => setToggleMenu(true)}
            />
            )}
            {toggleMenu && (<div className='navbar__menu--links'>
                <Menu />
            </div>)}
        </div>
        <div className='navbar__links'>
            <Menu />
        </div>
    </div>
  )
}

export default Navbar
