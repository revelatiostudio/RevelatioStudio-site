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

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplitType from 'split-type'




const About = () => {

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    setTimeout(() => {
      createIntroAbout()
    }, 300)

  })

  function createIntroAbout() {
    const textTitle = new SplitType(".about-text-page h1")
    const text = new SplitType(".about-right h2")
    const tl = gsap.timeline()

    tl.fromTo([textTitle.chars, text.chars], {
      yPercent: 300,
      ease: "none"
    }, {
      yPercent: 0,
      ease: "power1.out",

    }).fromTo(".img-about", {
      yPercent: 10,
      opacity: 0,
      ease: "none"
    }, {
      yPercent: 0,
      opacity: 1,
      ease: "power1.out",

    }, 0.5)
  }
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
      <Equipe />
      <RoletaScroll />
      <ProjectsFeedBack />
      <Clientes />
      <Ambiente color='white' />
      <Destaques />
      <BottomHome />


    </>

  )
}

export default Transition(About)
