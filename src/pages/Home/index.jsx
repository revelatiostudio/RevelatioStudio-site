import React from 'react'
import './home.css'

import Solucoes from '../../componentes/Solucoes'


import homeImg from '../../assets/img/home/home_img.jpg'
import logo from '../../assets/img/home/logo.svg'
import revelatio from '../../assets/img/home/name_revelatio.svg'
import Services from './componentesHome/Services'
import AboutHome from './componentesHome/AboutHome'

export default function Home() {
  return (
    <>

      <section className='home'>
        <img src={homeImg} alt='' />
        <div className='grid'>

          <nav className='navhome'>

            <div className='logo'>
              <a href='/'> <img src={logo} alt='' /></a>
            </div>

            <div>
              <p>Revelamos o âmago dos negócios.</p>
            </div>

            <div>
              <p>PT|EN</p>
            </div>

            <div>
              <p>[Menu]</p>
            </div>

          </nav>

          <div className='middle'>
            <div className='left_part'>

              <div className='top_part'>
                <p>(SOCIAL MEDIA)</p>
              </div>

              <div className='bottom_part'>
                <p>INSTAGRAM</p>
                <p>BEHANCE</p>
              </div>

            </div>

            <div className='right_part'>
              <div className='time_text'>
                <p>(CURRENTLY TIME)</p>
              </div>

              <div className='time'>
                <p>RECIFE,BRA <a>[12:46PM]</a></p>
                <p>NEW YORK,EUA <a>[12:46PM]</a></p>

              </div>

            </div>


          </div>

          <div className='img_revelatio'>
            <img src={revelatio} alt='' />

          </div>

        </div>

      </section>
      <Solucoes/>
      <Services/>
      {/* Cases   -> vamos colocar o componente de cases aqui*/}  
      <AboutHome/>

    </>

  )
}
