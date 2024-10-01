import React, { useEffect } from 'react'
import Navbar from './Navbar'
import './styles.css'
import Bubbles from './animations/bubbles'
import mimi from '../assets/professional-image.jpg'
import Typed from 'typed.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5,faJs, faReact,faFigma } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Front-End Developer','UI/UX Designer'],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };

    const typed = new Typed('.auto-type', options);

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='home-container'>
      <Navbar/>

      <Bubbles/>

      <div className="info-container">
          <div className="title-photo">
                <div className="presentation">
                  <div className='job-title'>
                    <h3 className='auto-type'></h3>
                  </div>
                   <p>
                    Hello there, I'm Minette. I am a Front-end developer 
                    - Currently based in Yaounde, Centre, Cameroon.
                   </p>
                </div>
                <div className="image">
                    <img src={mimi} alt="myPhoto" />
                </div>
          </div>

          <div className="skills">
                <ul>
                    <li>
                        <span>Skills:</span>
                    </li>
                    <li><FontAwesomeIcon icon={faHtml5} className="icon"/></li>
                    <li><FontAwesomeIcon icon={faCss3Alt} className="icon"/></li>
                    <li><FontAwesomeIcon icon={faJs} className="icon"/></li>
                    <li><FontAwesomeIcon icon={faReact} className="icon"/></li>
                    <li><FontAwesomeIcon icon={faFigma} className="icon"/></li>
                </ul>
          </div>
      </div>
    </div>
  )
}

export default Home
