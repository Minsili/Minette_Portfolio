import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer>
        <div className="logo">
            <h2>MGiTech</h2>
            <p>Writing By Minsili. &copy; 2024</p>
        </div>
        <div className="social-links">
            <a href="#">
                <i><FontAwesomeIcon icon={faLinkedin}  className="icon"/></i>
            </a>
            <a href="#">
                <i><FontAwesomeIcon icon={faFacebook}  className="icon"/></i>
            </a>
            <a href="#">
                <i><FontAwesomeIcon icon={faSquareInstagram}  className="icon"/></i>
            </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
