import React from 'react'
import NavBar from '../../componentes/NavBar'
import Solucoes from '../../componentes/Solucoes'
import Services from '../../componentes/Services'
import './about.css'


import about_img from '../../assets/img/home/home_img.jpg'
import img_blour from '../../assets/img/about/imgBlour.png'
import Fundadores from './componentesAbout/Fundadores'
import RoletaScroll from './componentesAbout/RoletaScroll'
import Ideias_About from './componentesAbout/Ideias_About'
import ProjectsFeedBack from './componentesAbout/ProjectsFeedBack'
import InfinitTimeLine from '../../componentes/InfinitTimeLine'
import Ambiente from '../../componentes/ambiente/Ambiente'
import Destaques from './componentesAbout/Destaques'
import Principios from './componentesAbout/Principios'
import BottomHome from '../Home/componentesHome/BottomHome'
import Transition from '../../transition'



const About = () => {
  return (
    <>
      <header>
        <div className='grid-global'>
          {/* 
          <NavBar color='black' /> */}
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


      <Solucoes />
      <Services />
      <Fundadores />
      <RoletaScroll />
      <Ideias_About />
      <ProjectsFeedBack />
      <InfinitTimeLine />
      <Ambiente color='white' />
      <Destaques />
      <section className='blour-image'>
        <img src={img_blour} alt='imagem com blour' />
      </section>
      <Principios />
      <BottomHome />


    </>

  )
}

export default Transition(About)
