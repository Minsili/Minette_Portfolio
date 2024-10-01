import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import exampleImage from '../assets/mimi-photo.jpg';
import './styles2.css';

const Projects = () => {
  return (
    <div id='project' className='projects-container'>
      <div className="header">
        <h3>Portfolio</h3>
        <p>
            Since the beginning of my journey as a Front-End developer,
            I've done a small freelance job, school work-projects, internship jobs, and
            personal projects to develop my skills as a front-end developer.
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
            460: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {/* Card 1 */}
          <SwiperSlide>
            <div className="box">
              <div className="image">
                <a href="#">
                  <img src={exampleImage} alt="Project" />
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Card 2 */}
          <SwiperSlide>
            <div className="box">
              <div className="image">
                <a href="#">
                  <img src={exampleImage} alt="Project" />
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Card 3 */}
          <SwiperSlide>
            <div className="box">
              <div className="image">
                <a href="#">
                  <img src={exampleImage} alt="Project" />
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Card 4 */}
          <SwiperSlide>
            <div className="box">
              <div className="image">
                <a href="#">
                  <img src={exampleImage} alt="Project" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* ... */}
        </Swiper>

      </div>
    </div>
  )
}

export default Projects
