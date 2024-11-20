import React, { useEffect, useRef, useState } from 'react'
import './projectsfeedback.css'
import feed1 from '../../../../assets/img/about/feedback/prop.png'
import feed2 from '../../../../assets/img/about/feedback/approach.png'
import feed3 from '../../../../assets/img/about/feedback/castro.png'
import feed4 from '../../../../assets/img/about/feedback/life.png'
import feed5 from '../../../../assets/img/about/feedback/ctm.png'
import feed6 from '../../../../assets/img/about/feedback/dca.png'

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
    { id: 3, img: feed3 },
    { id: 4, img: feed4 },
    { id: 5, img: feed5 },
    { id: 6, img: feed6 }
  ]

  const [imgAtual, setImgAtual] = useState(0);
  const [valorBarra, setValorBarra] = useState(16.5)
  const totalSlides = image.length - 1;





  const updateImage = (direction) => {
    const images = [...document.querySelectorAll('.img-project img')];
    const textos = [...document.querySelectorAll('.descri p')];
    const peopleDesc = [...document.querySelectorAll('.people-description')];
    const tl = gsap.timeline()
    let barra = 1;

    if (direction === "rigth" && imgAtual <= (totalSlides - 1)) {
      console.log('imgAtual',images[imgAtual])
      console.log('images',images)
      console.log('totalSlides',totalSlides)

      console.log('caiu no iff')

      gsap.fromTo(
        images[imgAtual],
        {
          clipPath:
            "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)", // para esquerda
            duration: 2,
        },
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          duration: 2,
          ease: "hop",
        }
      );
      tl.to([textos, peopleDesc], {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      })
      tl.to([textos, peopleDesc], {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.inOut",
      })





      setTimeout(() => {
        setImgAtual((prev) => prev + 1);
      }, 1000);

      barra++;
      setValorBarra((prev) => prev + 16.5);


    }

    if (direction === "left" && imgAtual > 0) {

      gsap.to(images[imgAtual - 1], {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: 2,
        ease: "hop",
      },

      )
      tl.to([textos, peopleDesc], {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      })
      tl.to([textos, peopleDesc], {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.inOut",
      })
      setTimeout(() => {
        setImgAtual((prev) => prev - 1);
      }, 1000);

      setValorBarra((prev) => prev - 16.5);

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

          {
            imgAtual === 0 ? (
              <>
                <div className='people-description'>
                  <div className='people-img'>
                    <img src={arthurMedeiros} alt='Arthur Medeiros imagem' />

                  </div>
                  <div className='people-name'>
                    <p>Guilherme Rocha</p>
                    <p><span>Prop</span></p>

                  </div>

                </div>
                <div className='descri'>
                <p>O projeto foi incrível, gostamos muito do resultado, e o Revelatio Studio conseguiu realmente extrair 
                  toda a nossa visão sobre o que era a Prop e colocar em uma marca e identidade visual.</p>
                </div>
              </>


            ) : imgAtual === 1 ? (
              <>
                <div className='people-description'>
                  <div className='people-img'>
                    <img src={arthurMedeiros} alt='Arthur Medeiros imagem' />

                  </div>
                  <div className='people-name'>
                    <p>Pedro Meneses</p>
                    <p><span>Approach</span></p>

                  </div>

                </div>
                <div className='descri'>
                  <p>Produto totalmente aderente às expectativas. Processo de criação com foco no cliente e bastante humanizado. 
                    Devo ressaltar ainda o atendimento pós-entrega do projeto, no qual o Revelatio sempre se colocou prestativo.</p>
                </div>
              </>

            ) : imgAtual === 2 ? (
              <>
              <div className='people-description'>
                <div className='people-img'>
                  <img src={arthurMedeiros} alt='Arthur Medeiros imagem' />

                </div>
                <div className='people-name'>
                  <p>Thiago Hinrichsen</p>
                  <p><span>Castro & Hinrichsen</span></p>

                </div>

              </div>
              <div className='descri'>
                <p>Contratamos o Revelatio Studio para criar nossa Identidade Visual, através da indicação de um grande amigo. 
                  Todas as reuniões foram bem direcionadas para que tivéssemos o melhor conceito na construção de nossa nova marca. 
                  E não foi diferente na apresentação do resultado final do projeto. Foi muito gratificante ver o que o Revelatio nos proporcionou. Recomendo de olhos fechados.</p>
              </div>
            </>
            ) : imgAtual === 3 ? (
              <>
              <div className='people-description'>
                <div className='people-img'>
                  <img src={arthurMedeiros} alt='Arthur Medeiros imagem' />

                </div>
                <div className='people-name'>
                  <p>Maicon Lino</p>
                  <p><span>Life Consultoria e Tecnologia</span></p>

                </div>

              </div>
              <div className='descri'>
                <p>O resultado do projeto de rebranding realizado pelo Revelatio Studio atingiu nossas expectativas. 
                  O nível de dedicação e atenção aos detalhes apresentados pela equipe foi notável, tornando visível o comprometimento em 
                  entender a essência da Life e traduzi-la em uma nova identidade visual inovadora e impactante.</p>
              </div>
            </>
            ) : imgAtual === 4 ? (
              <>
              <div className='people-description'>
                <div className='people-img'>
                  <img src={arthurMedeiros} alt='Arthur Medeiros imagem' />

                </div>
                <div className='people-name'>
                  <p>Ana Karla Arraes</p>
                  <p><span>CTM DOR</span></p>

                </div>

              </div>
              <div className='descri'>
                <p>O projeto de Identidade Visual elaborado para nossa clínica CTM DOR ficou muito bom, nos surpreendeu com o resultado. 
                  Além disso, a apresentação final do projeto foi excelente, o Revelatio foi muito seguro nos argumentos e, com certeza, vai longe!</p>
              </div>
            </>
            ) : (
              <>
              <div className='people-description'>
                <div className='people-img'>
                  <img src={arthurMedeiros} alt='Arthur Medeiros imagem' />

                </div>
                <div className='people-name'>
                  <p>Andrea Forjaz</p>
                  <p><span>DCA Influence House</span></p>

                </div>

              </div>
              <div className='descri'>
                <p>O Revelatio Studio conduziu o processo de forma brilhante, ouviu todos os pontos levantados e em pouco 
                  tempo trouxe algo exatamente como queríamos (e nem sabíamos ao certo o que queríamos). Mudamos praticamente nada do projeto inicial, caiu como uma luva 
                  e temos muito orgulho da nova identidade visual. Nos sentimos representadas efetivamente e com vontade de mostrar nossa nova forma aos clientes. 
                  Inclusive, a percepção dos clientes e não clientes de forma geral é de que a DCA é uma empresa profissional, sólida, robusta. 
                  E a comunicação visual contribuiu para essa percepção. Obrigada, Revelatio!</p>
              </div>
            </>
            )
             
              



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
