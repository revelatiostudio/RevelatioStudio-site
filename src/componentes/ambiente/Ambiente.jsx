import React from 'react'
import './ambiente.css'

import logo from '../../assets/img/home/logo.svg'
import logoPreto from '../../assets/img/home/logo_black.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation, Grid, FreeMode, Pagination } from 'swiper/modules'

import ambiente1 from '../../assets/img/home/ambiente/ambiente1.png'
import ambiente2 from '../../assets/img/home/ambiente/ambiente2.png'
import ambiente3 from '../../assets/img/home/ambiente/ambiente3.png'
import ambiente4 from '../../assets/img/home/ambiente/ambiente4.png'

export default function Ambiente({color = 'black'}) {
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
    <section className={`container_ambiente ${color}`}>
      <div className='grid-global'>
        <div className='head'>
          <h1>Nosso Ambiente</h1>
          { color === 'black' ? 
          <img src={logo} alt='Logo Revelatio' />
          :
          <img src={logoPreto} alt='Logo preto Revelatio' />

          }
          
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
            breakpoints = {{
              800: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 2,
              },
              801:{
                slidesPerView: 3.5
              }
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
