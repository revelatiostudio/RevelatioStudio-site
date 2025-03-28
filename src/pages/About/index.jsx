import React from 'react'
import NavBar from '../../componentes/NavBar'
import Solucoes from '../../componentes/Solucoes'
import Services from '../../componentes/Services'
import './about.css'


import about_img from '../../assets/img/about/about-img.jpg'
import img_blour from '../../assets/img/about/imgBlour.png'
import Fundadores from './componentesAbout/Fundadores'
import RoletaScroll from './componentesAbout/RoletaScroll'
import Ideias_About from './componentesAbout/Ideias_About'
import ProjectsFeedBack from './componentesAbout/ProjectsFeedBack'
import Ambiente from '../../componentes/ambiente/Ambiente'
import Destaques from './componentesAbout/Destaques'
import BottomHome from '../Home/componentesHome/BottomHome'
import Transition from '../../transition'
import AboutHome from '../Home/componentesHome/AboutHome'
import Clientes from './componentesAbout/Clientes'
import Equipe from './componentesAbout/Equipe'



const About = () => {
  return (
    <>
      <header>
        <div className='grid-global'>

          <div className='about-us'>
            <div className='about-text-page'>
              <h1>Sobre nós</h1>
            </div>
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
      <AboutHome />
      <Fundadores />
      <Equipe/>
      <RoletaScroll />
      <ProjectsFeedBack />
      <Clientes/>
      <Ambiente color='white' />
      <Destaques />
      <BottomHome />


    </>

  )
}

export default Transition(About)
