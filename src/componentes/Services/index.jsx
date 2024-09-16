import React from 'react'
import './services.css'

import prop from '../../assets/img/home/prop.png'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  function scrollhover() {
    const texts = [...document.querySelectorAll('.lista_images')];
    texts.forEach((text) => {
      ScrollTrigger.create({
        trigger: text,
        start: "top center",
        end: "bottom center",
        toggleClass: { targets: text, className: "active" },
        onEnter: () => text.classList.add("active"),
        onLeave: () => text.classList.remove("active"),
        onEnterBack: () => text.classList.add("active"),
        onLeaveBack: () => text.classList.remove("active"),
      });
    });


  }

  useGSAP(() => {
    scrollhover();

  })

  return (
    <div className='grid-global'>

      <div className='container'>

        <div className='images_services'>

          <div className='lista_images'>
            <div className='text'>
              <h1>+04</h1>
            </div>

            <div className='images'>
              <img src={prop} alt='' />
            </div>
            <div className='text_solutions'>
              <p>Anos gerando soluções</p>
              <p>criativas para o mercado</p>
            </div>
          </div>

          <div className='lista_images'>
            <div className='text'>
              <h1>+05</h1>

            </div>
            <div className='images'>
              <img src={prop} alt='' />
            </div>
            <div className='text_solutions'>
              <p>Países em que nosso</p>
              <p>trabalho está presente</p>
            </div>
          </div>
          <div className='lista_images'>
            <div className='text'>
              <h1>+27</h1>

            </div>
            <div className='images'>
              <img src={prop} alt='' />
            </div>
            <div className='text_solutions'>
              <p>Projetos com destaque e </p>
              <p>reconhecimento internacional</p>
            </div>
          </div>
          <div className='lista_images'>
            <div className='text'>
              <h1>+200</h1>

            </div>
            <div className='images'>
              <img src={prop} alt='' />
            </div>
            <div className='text_solutions'>
              <p>Projetos realizados ao </p>
              <p>redor do mundo</p>
            </div>
          </div>

        </div>



      </div>

    </div>
  )
}
