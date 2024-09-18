import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6"
import './styles.css'

const Navbar = () => {

  const [menuOpen, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!menuOpen);
  };

  return (
    <div className='navBar-container'>
      <nav>
        <div className="logo">
           <h2>MGiTech</h2>
        </div>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <li>
                <a href='#services'>Services</a>
            </li>
            <li>
                <a href='#project'>Projects</a>
            </li>
            <li>
                <a href='#contact'>Contact Me</a>
            </li>
            <li>
                <a href='../../personal_resume.pdf' download={true} className='cv-resume'>My Resume</a>
            </li>
        </ul>
        <div className='nav-icon' onClick={toggleMenu}>
          <FaBars/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
