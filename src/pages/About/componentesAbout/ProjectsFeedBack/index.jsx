import React, { useEffect, useRef, useState } from 'react'
import './projectsfeedback.css'
import feed1 from '../../../../assets/img/about/feedback/feed1.png'
import feed2 from '../../../../assets/img/about/feedback/prop.png'
import feed3 from '../../../../assets/img/about/feedback/feed3.png'

import arthurMedeiros from '../../../../assets/img/about/arthur-medeiros.png'
import setaEsquerda from '../../../../assets/img/about/setaEsc.svg'
import setaDireita from '../../../../assets/img/about/setaDir.svg'
import { image, Progress } from "@nextui-org/react";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'

export default function ProjectsFeedBack() {

  const image = [
    { id: 1, img: feed1 },
    { id: 2, img: feed2 },
    { id: 3, img: feed3 }
  ]

  const [imgAtual, setImgAtual] = useState(0);
  const [valorBarra, setValorBarra] = useState(33)
  const totalSlides = 2;





  const updateImage = (direction) => {
    const images = [...document.querySelectorAll('.img-project img')];
    const textos = [...document.querySelectorAll('.descri p')];
    const tl = gsap.timeline()

    let barra = 1;

    if (direction === "rigth" & imgAtual <= (totalSlides - 1)) {

      gsap.fromTo(
        images[imgAtual],
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





      setTimeout(() => {
        setImgAtual(imgAtual + 1);
      },1000)

      barra++;
      setValorBarra((prev) => prev * barra);


    }

    if (direction === "left" & imgAtual >= (totalSlides - 1)) {

      gsap.to(images[imgAtual - 1], {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: 1.5,
        ease: "hop",
      },

      )
      setTimeout(() => {
        setImgAtual(imgAtual + 1);
      },1000)

      setValorBarra((prev) => prev / 2);

    }

    tl.to(textos, {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    })
    tl.to(textos, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      delay: 0.5,
      ease: "power2.inOut",
    })


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
          {
            imgAtual === 0 ? (

              <div className='descri'>
                <p>Go further into Planet Earth’s most out-there <br />
                  playgrounds with technical gear designed for  <br />
                  mixed terrains and trails. Engineered with highly  <br />
                  durable yet comfortable fabrics that combine the  <br />
                  incredible properties of soft touch, sweat-wicking <br />
                  and breathable materials with the toughness to  <br />
                  keep going as long as you can. Wild times await.</p>
              </div>
            ) : imgAtual === 1 ? (
              <div className='descri'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                  Corrupti accusantium asperiores obcaecati est veritatis ducimus nisi, <br />
                  sed unde voluptatum ratione quod itaque? Sed adipisci itaque quia laborum <br />
                  blanditiis harum ullam?</p>
              </div>
            ) :
              <div className='descri'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                  Corrupti accusantium asperiores obcaecati est veritatis ducimus nisi, <br />
                  sed unde voluptatum ratione quod itaque? Sed adipisci itaque quia laborum <br />
                  blanditiis harum ullam?</p>
              </div>


          }



          <div className='change-slide'>
            <div className='bar'>
              <Progress classNames={{
                base: 'h-[0.1rem]'

              }}
                size="sm" aria-label="Loading..."
                color="default" value={valorBarra} radius='none' minValue={0} maxValue={100} valueLabel={10}
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
