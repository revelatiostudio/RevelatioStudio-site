import React from 'react'
import './ambiente.css'

import logo from '../../assets/img/home/logo.svg'
import logoPreto from '../../assets/img/home/logo_black.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'

import video1 from '../../assets/videos/nossoAmbiente/video1.mp4'
import video2 from '../../assets/videos/nossoAmbiente/video2.mp4'
import video3 from '../../assets/videos/nossoAmbiente/video3.mp4'
import video4 from '../../assets/videos/nossoAmbiente/video4.mp4'
import video5 from '../../assets/videos/nossoAmbiente/video5.mp4'
import video6 from '../../assets/videos/nossoAmbiente/video6.mp4'

export default function Ambiente({color = 'black'}) {
  const videos = [

    { id: '1', image: video1 },
    { id: '2', image: video2 },
    { id: '3', image: video3 },
    { id: '4', image: video4 },
    { id: '5', image: video5 },
    { id: '6', image: video6 },
    { id: '7', image: video1 },
    { id: '8', image: video2 },
    { id: '9', image: video3 },
    { id: '10', image: video4 },
    { id: '11', image: video5 },
    { id: '12', image: video6 },
  ]
  return (
    <section className={`container_ambiente ${color}`}>
      <div className='grid-global'>

        <div className='galeria'>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={30}
            loop = {true}
            allowTouchMove={false}
            loopedSlides={videos.length}
            autoplay={{
              delay: 0,
              disableOnInteraction: false
            }}
            speed={6000}
            modules={[Autoplay]}
            breakpoints={{
              480:{
                slidesPerView: 1.2
              },
              600:{
                slidesPerView: 2

              },
              800:{
                slidesPerView: 2

              },
              900:{
                slidesPerView: 3

              },
              1200:{
                spaceBetween: 10,
                slidesPerView: 3.7
              }
              
            }}
            
          >
            
            {
              
              videos.map((video) => (
                <SwiperSlide key={video.id} >
                    <video autoPlay muted playsInline loop >
                      <source src={video.image} type='video/mp4'/>
                    </video>
                  </SwiperSlide>
              ))
              
            }

          </Swiper>


        </div>
      </div>

    </section>
  )
}
