import React from 'react'
import './Portfolio.css'

import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import Project1 from '../../img/project1.png'
import Project2 from '../../img/project2.png'
import Project3 from '../../img/project3.png'
import Project4 from '../../img/project4.png'
import Project5 from '../../img/project5.png'
import Project6 from '../../img/project6.png'
import { Pagination }  from 'swiper' 
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';

const Portfolio = () => {
  return (
    <div className='portfolio' id='Portfolio'>

        {/* heading. */}
        <span>Recent Project</span>
        <span>Portfolio</span>
        
        {/* slider  */}
        
        <Swiper
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={3}
           grabCursor={true}
           pagination={{ clickable: true }}
           className="portfolio-slider"
        >
            <SwiperSlide>
                  <img src={Project1} alt="Sidebar" />
            </SwiperSlide>
            <SwiperSlide>
                  <img src={Project2} alt="Sidebar" />
            </SwiperSlide>
            <SwiperSlide>
                  <img src={Project3} alt="Sidebar" />
            </SwiperSlide>
            <SwiperSlide>
                  <img src={Project4} alt="Sidebar" />
            </SwiperSlide>
            <SwiperSlide>
                  <img src={Project5} alt="Sidebar" />
            </SwiperSlide>
            <SwiperSlide>
                  <img src={Project6} alt="Sidebar" />
            </SwiperSlide>
        </Swiper>   
        <div className='blur p-blur'>hello</div>   
    </div>
  )
}

export default Portfolio
