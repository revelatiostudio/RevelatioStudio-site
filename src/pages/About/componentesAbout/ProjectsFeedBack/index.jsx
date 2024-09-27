import React, { useEffect, useRef, useState } from 'react'
import './projectsfeedback.css'
import feedback1 from '../../../../assets/img/about/feedback1.png'
import lucas from '../../../../assets/img/about/Lucas.png'
import icaro from '../../../../assets/img/about/Icaro.png'

import arthurMedeiros from '../../../../assets/img/about/arthur-medeiros.png'
import setaEsquerda from '../../../../assets/img/about/setaEsc.svg'
import setaDireita from '../../../../assets/img/about/setaDir.svg'
import { image, Progress } from "@nextui-org/react";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'

export default function ProjectsFeedBack() {

  const image = [
    { id: 1, img: feedback1 },
    { id: 2, img: lucas },
    { id: 3, img: icaro }
  ]

  let currentImg = 0;
  const totalSlides = 2;



  const updateImage = (direction) => { 
    const images = [...document.querySelectorAll('.img-project img')];

    if(direction === "left" & currentImg <= (totalSlides - 1)){
      console.log('left',currentImg)
      gsap.fromTo(
        images[currentImg],
        {
          clipPath:
            "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)" // para esquerda
        },
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          duration: 1.5,
          ease: "hop",
        }
      );
      currentImg++;

    }

    if(direction === "rigth" & currentImg >= (totalSlides -1)){
      console.log('rigth',currentImg)
      
      gsap.to(images[currentImg - 1],{
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: 1.5,
        ease: "hop",
      },
      
    )
    currentImg--;
    
    }

 
  }






  return (
    <div className='grid-global'>
      <section className='project-feedback'>

        <div className='img-project'>

          {

            image.map((imagem, index) => (
              <img src={imagem.img} alt='' key={index} />

            ))
          }

        </div>

        <div className='feedback'>
          <div className='people-description'>
            <div className='people-img'>
              <img src={arthurMedeiros} alt='Arthur Medeiros imagem' />

            </div>
            <div className='people-name'>
              <p>Arthur Medeiros</p>
              <p><span>Brand director - Atho Studio</span></p>

            </div>

          </div>

          <div className='descri'>
            <p>Go further into Planet Earth’s most out-there <br />
              playgrounds with technical gear designed for  <br />
              mixed terrains and trails. Engineered with highly  <br />
              durable yet comfortable fabrics that combine the  <br />
              incredible properties of soft touch, sweat-wicking <br />
              and breathable materials with the toughness to  <br />
              keep going as long as you can. Wild times await.</p>

          </div>

          <div className='change-slide'>
            <div className='bar'>
              <Progress classNames={{
                base: 'h-[0.1rem]'

              }}
                size="sm" aria-label="Loading..."
                color="default" value={10} radius='none' minValue={0} maxValue={100} valueLabel={10}
              />

            </div>
            <div className='setas' >
              <img src={setaEsquerda} alt='' onClick={() => updateImage('left')} />
              <img src={setaDireita} alt='' onClick={() => updateImage('rigth')} />

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}
