import React, { useEffect, useRef } from 'react'
import './roletaScroll.css'

import gradiente from '../../../../assets/img/home/gradiente-2.png'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RoletaScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const lugares = [
    { estado: 'Waterloo', pais: 'CA' },
    { estado: 'New York', pais: 'EUA' },
    { estado: 'Londres', pais: 'UK' },
    { estado: 'Boca Raton', pais: 'EUA' },
    { estado: 'Porto', pais: 'PT' },
    { estado: 'Recife', pais: 'BR' },
    { estado: 'São Paulo', pais: 'BR' },
    { estado: 'Salvador', pais: 'BR' },
    { estado: 'Natal', pais: 'BR' },
    { estado: 'Manaus', pais: 'BR' },
    { estado: 'Chapecó', pais: 'BR' },
    { estado: 'Balneário', pais: 'BR' },
    { estado: 'Porto Alegre', pais: 'BR' },
    { estado: 'Acre', pais: 'BR' },
    { estado: 'Fortaleza', pais: 'BR' },
    { estado: 'São Carlos', pais: 'BR' },
    { estado: 'Bela Vista', pais: 'BR' },
    { estado: 'Canela', pais: 'BR' },
    { estado: 'Imperatriz', pais: 'BR' },
    { estado: 'Mato Grosso', pais: 'BR' },
    { estado: 'Rio de Janeiro', pais: 'BR' }

  ]
  const rouletteRef = useRef(null);

  const itemsRef = useRef([]);
  const items = itemsRef.current;

  function roletaScroll() {
    const container = rouletteRef.current;
    const viewportWidth = window.innerWidth;

    gsap.set('.country', {
      y: 450

    })
    var activation;

    gsap.to(items, {
      y: -((items.length) * (viewportWidth <= 480 ? 25 : viewportWidth <= 1150 ? 60 : 80)),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => "+=" + container.offsetHeight * 2,
        scrub: 0.5,
        pin: true,
        snap: 1 / (items.length - 1),
        onUpdate: self => {
          const viewportHeight = window.innerHeight;
          items.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const distanceFromCenter = Math.abs(viewportHeight / 2 - itemCenter);

            if (viewportWidth <= 480) {
              activation = 20
            } else if (viewportWidth <= 1150) {
              activation = 30
            } else {
              activation = 50
            }




            if (distanceFromCenter < activation) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });
        }
      }
    });
  }


  function setFade() {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();

      const viewportHeight = window.innerHeight;
      const itemCenter = rect.top + rect.height / 2;

      const distanceFromCenter = Math.abs(viewportHeight / 2 - itemCenter);

      const progress = distanceFromCenter / (viewportHeight / 2);

      const adjustedProgress = Math.pow(progress, 2);

      let fade = 1 - adjustedProgress * 0.8;
      fade = Math.max(0, Math.min(fade, 1));

      gsap.to(item, { opacity: fade });
    });
  }

  function roletaScrollTablet(){
   items.forEach((item) => {
    gsap.to(item,{
      scrollTrigger:{
        trigger:item,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          item.classList.add("active");
        },
        onLeave: () => {
          item.classList.remove("active")
        },
        onEnterBack: () =>{
          item.classList.add("active");
        },
        onLeaveBack: () => {
          item.classList.remove("active")

        }
      }
    })
   })
  }
  useGSAP(() => {
    if (window.innerWidth >= 801) {
      roletaScroll()
      window.addEventListener("scroll", setFade);

      // return () => {
      //   window.removeEventListener("scroll", setFade);
      // };

    }else{
      roletaScrollTablet()
    }



  }, []);






  return (
    <>
      {window.innerWidth <= 800 ? (
        <section className='roulette-tablet' ref={rouletteRef}>
          <div className='grid-global'>
            <div className='header-roulette-tablet'>
              <h1>Nossos projetos <br />Estão ao redor do mundo</h1>
              <p>2020 - 2024</p>
            </div>
            <div className='container-country-tablet'>
              {
                lugares.map((lugar, index) => (
                  <div className='country-tablet' key={lugar.estado} ref={(el) => itemsRef.current[index] = el}>
                    <h1>{lugar.estado}</h1>
                    <p>({lugar.pais})</p>
                  </div>

                ))
              }
            </div>
          </div>
        </section>
      ) : (
        <section className='container-roulette'>
          <div className='grid-global'>

            <div className='grid-roulette' ref={rouletteRef}>
              <div className='left-roulette'>
                <h2>Nossos projetos <br />Estão ao redor do mundo</h2>
              </div>

              <div className='middle-roulette'>
                <div className='container-blur'>
                  <img src={gradiente} alt='gradiente' />
                </div>
                {
                  lugares.map((lugar, index) => (
                    <div className='country' key={lugar.estado} ref={(el) => itemsRef.current[index] = el}>
                      <h1>{lugar.estado}</h1>
                      <p>({lugar.pais})</p>
                    </div>

                  ))
                }


                <div className='container-blur bottom'>
                  <img src={gradiente} alt='gradiente' />
                </div>


              </div>


              <div className='rigth-roulette'>
                <p>2020 - 2024</p>
              </div>

            </div>


          </div>

        </section>

      )}
    </>
  )
}
