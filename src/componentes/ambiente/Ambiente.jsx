import React from 'react'
import './ambiente.css'

import logo from '../../assets/img/home/logo.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation, Grid, FreeMode, Pagination } from 'swiper/modules'

import ambiente1 from '../../assets/img/home/ambiente/ambiente1.png'
import ambiente2 from '../../assets/img/home/ambiente/ambiente2.png'
import ambiente3 from '../../assets/img/home/ambiente/ambiente3.png'
import ambiente4 from '../../assets/img/home/ambiente/ambiente4.png'

export default function Ambiente() {
  const imagens = [

    { id: '1', image: ambiente1 },
    { id: '2', image: ambiente2 },
    { id: '3', image: ambiente3 },
    { id: '4', image: ambiente4 },
    { id: '5', image: ambiente1 },
    { id: '6', image: ambiente2 },
    { id: '7', image: ambiente3 },
    { id: '8', image: ambiente4 },
  ]
  return (
    <section className='container_ambiente'>
      <div className='grid'>
        <div className='head'>
          <h1>Nosso Ambiente</h1>
          <img src={logo} alt='Logo Revelatio' />
        </div>

        <div className='galeria'>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            pagination={{
              clickable: true,
            }}
            
          >
            
            {
              
              imagens.map((imagem) => (
                <SwiperSlide key={imagem.id}>
                    <img src={imagem.image}/>
                  </SwiperSlide>
              ))
              
            }

            



          </Swiper>


        </div>
      </div>

    </section>
  )
}
