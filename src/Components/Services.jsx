import React from 'react'
import './styles2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faObjectGroup} from '@fortawesome/free-regular-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Services = () => {
  return (
    <div id='services' className='service-container'>
      <div className="header">
        <h3>Services | Offer</h3>
        <p>
          I can assist you with the following servives.
        </p>
      </div>

      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Card 1 */}
          <SwiperSlide>
          <div className="cols">
          <div className="offer">
            <i><FontAwesomeIcon icon={faFileCode} className='icon'/></i>
            <h4>Front-End Development</h4>
          </div>
          <div className="details">
           <p>
             <strong>Front-End Development</strong> refers to create a visually 
             appealing and responsive interface that provides a seamless
              user experience across different devices and browsers.
            </p>
             <span>Tools And Technologies Used</span>
             <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>GitHub</li>
             </ul>
          </div>
          </div>
          </SwiperSlide>
        
          {/* Card 2 */}
          <SwiperSlide>
        <div className="cols">
          <div className="offer">
            <i><FontAwesomeIcon icon={faObjectGroup} className='icon'/></i>
            <h4>UI/UX Design</h4>
          </div>
          <div className="details">
            <p>
             <strong>UI/UX Design</strong> refers to the process of creating user interfaces
             and user experiences for digital products,
             such as websites, mobile apps, and software applications.
            </p>
             <span>Tools And Technologies Used</span>
             <ul>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Abstract</li>
             </ul>
          </div>
        </div>
          </SwiperSlide>
       
          {/* Card 3 */}
          <SwiperSlide>
       <div className="cols">
          <div className="offer">
            <i><FontAwesomeIcon icon={faUpRightFromSquare} className='icon'/></i>
            <h4>SEO Optimization</h4>
          </div>
          <div className="details">
            <p>
             <strong>SEO Optimization (Search Engine Optimization)</strong> refers to the
              process of improving a website's visibility and ranking on search engine results
               pages (SERPs). 
            </p>
             <span>Tools And Technologies Used</span>
             <ul>
              <li>Google Keyword Planner</li>
              <li>Google Search Console</li>
              <li>Grammarly</li>
              <li>Google PageSpeed Insight</li>
             </ul>
          </div>
        </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  )
}

export default Services
