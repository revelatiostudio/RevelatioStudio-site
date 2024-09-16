import React from 'react'
import NavBar from '../../componentes/NavBar'
import Solucoes from '../../componentes/Solucoes'
import Services from '../../componentes/Services'
import './about.css'


import about_img from '../../assets/img/home/home_img.jpg'



export default function About() {
  return (
    <>
      <header>
        <div className='grid-global'>

          <NavBar color='black' />
          <div className='about-us'>
            <h1>Sobre nós</h1>
            <div className='about-right'>
              <h2>Somos uma boutique de design focada <br />
                em soluções de <span>branding & tecnologia</span> <br /> para empresas em crescimento.</h2>
            </div>

          </div>
        </div>
        <div className='img-about'>
          <img src={about_img} alt='' />

        </div>
      </header>

      <section>
        <Solucoes />
      </section>

      <section>
        <Services />
      </section>
    </>

  )
}
