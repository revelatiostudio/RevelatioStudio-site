import React from 'react'
import './home.css'

import Solucoes from '../../componentes/Solucoes'


import homeImg from '../../assets/img/home/home_img.jpg'
import revelatio from '../../assets/img/home/name_revelatio.svg'
import Services from './componentesHome/Services'
import AboutHome from './componentesHome/AboutHome'
import Ideias from '../../componentes/Ideias'
import Ambiente from '../../componentes/ambiente/Ambiente'
import BottomHome from './componentesHome/BottomHome'
import NavBar from '../../componentes/NavBar'

export default function Home() {
  return (
    <>

      <section className='home'>
        <img src={homeImg} alt='' />
        <div className='grid'>
          <NavBar color='white'/>

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
      <Solucoes />
      <Services />
      {/* Cases   -> vamos colocar o componente de cases aqui*/}
      <AboutHome />
      <Ideias />
      <Ambiente />
      <BottomHome />

    </>

  )
}
