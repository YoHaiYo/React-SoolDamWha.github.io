import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import datasrc from '../../data/ssh.json'

function BestSwiper(props) {
  return (
      <Swiper 
        spaceBetween={10}
        slidesPerView={1.5}
        loop={true}
        // centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          735: {
            slidesPerView: 2.5,
          },
          1035: {
            slidesPerView: 3.5,
          },
          1335: {
            slidesPerView: 4.5,
          },
          1665: {
            slidesPerView: 5.5,
          },
        }}
  
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}        
      >
            {
      props.datasrc.map((el, idx)=> {
        return (
          <SwiperSlide key={`SwiperSlide${idx}`} >
          <a href="">
            <img src={el.imgsrc} alt="" />
          </a>
          <div className="pickbox">
            <div className="picktitle">{el.picktitle}</div>
            <div className="hashtag">{el.hashtag}</div>
          </div>
        </SwiperSlide>         
          )
      })
      
    } 
 
      </Swiper>  
  )
}

export default BestSwiper
